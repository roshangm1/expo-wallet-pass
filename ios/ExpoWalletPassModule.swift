import ExpoModulesCore
import PassKit

protocol WalletManagerDelegate: PKAddPassesViewControllerDelegate {
  func addPassesViewControllerDidFinish(_ controller: PKAddPassesViewController)
  func addPassFromUrl(_ pass: String)
}

public class ExpoWalletPassModule: Module {
  var pass: PKPass?
  var passLibrary: PKPassLibrary?
  weak var delegate: WalletManagerDelegate?

  private func showViewController(with data: Data) {
    do {
      self.pass = try? PKPass(data: data)
      self.passLibrary = PKPassLibrary()

      if self.passLibrary?.containsPass(self.pass!) ?? false {
        return
      }

      guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
        let rootViewController = windowScene.windows.first?.rootViewController
      else {
        return
      }
      var topViewController = rootViewController
      if let presentedViewController = rootViewController.presentedViewController {
        topViewController = presentedViewController
      }

      let passController = PKAddPassesViewController(pass: self.pass!)

      topViewController.present(passController!, animated: true)

    }
  }

  public func addPassFromUrl(_ pass: String) {
    DispatchQueue.main.async {

      guard let passURL = URL(string: pass) else {
        return
      }
      guard let data = try? Data(contentsOf: passURL) else {
        return
      }

      self.showViewController(with: data)
    }

  }

  private func checkPassByIdentifier(pass: PKPass, identifier: String, serialNumber: String?)
    -> Bool
  {
    if pass.passTypeIdentifier == identifier {
      if let serialNumber = serialNumber {
        return pass.serialNumber == serialNumber
      }
      return true
    }
    return false
  }

  public func definition() -> ModuleDefinition {

    Name("ExpoWalletPass")

    Function("canAddPasses") {
      return PKAddPassesViewController.canAddPasses()
    }

    Function("hasPass") { (passId: String, serialNumber: String?) -> Bool in
      let passLibrary = PKPassLibrary()
      let passes = passLibrary.passes()
      for pass in passes {
        if self.checkPassByIdentifier(pass: pass, identifier: passId, serialNumber: serialNumber) {
          return true
        }
      }

      return false
    }

    AsyncFunction("addPassFromUrl") { (pass: String) async throws -> Void in
      guard let passURL = URL(string: pass) else {
        throw NSError(
          domain: "wallet", code: 1,
          userInfo: [NSLocalizedDescriptionKey: "The pass URL is invalid"])
      }

      guard (try? Data(contentsOf: passURL)) != nil else {
        throw NSError(
          domain: "wallet", code: 2,
          userInfo: [NSLocalizedDescriptionKey: "The pass data is invalid"])
      }

      self.addPassFromUrl(pass)
    }

    Function("viewInWallet") { (passId: String, serialNumber: String?) -> Void in
      let passLibrary = PKPassLibrary()
      let passes = passLibrary.passes()

      for pass in passes {
        if self.checkPassByIdentifier(pass: pass, identifier: passId, serialNumber: serialNumber) {
          if let passUrl = pass.passURL {
            DispatchQueue.main.async {
              UIApplication.shared.open(passUrl, options: [:], completionHandler: nil)
              return
            }
          }
          return
        }
        return
      }
    }

    View(ExpoWalletPassView.self) {

    }

  }
}
