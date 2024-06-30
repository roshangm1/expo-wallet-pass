import ExpoModulesCore
import PassKit

class WalletButtonView: ExpoView  {
  private var passButton: PKAddPassButton!

  let onTap = EventDispatcher()
    
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        setupPassButton()

    }
    func setupPassButton() {
    passButton = PKAddPassButton(addPassButtonStyle: .black)
    passButton.translatesAutoresizingMaskIntoConstraints = false
    passButton.addTarget(self, action: #selector(passButtonPressed), for: .touchUpInside)

    addSubview(passButton)
    NSLayoutConstraint.activate([
      passButton.centerXAnchor.constraint(equalTo: centerXAnchor),
      passButton.centerYAnchor.constraint(equalTo: centerYAnchor),
      passButton.widthAnchor.constraint(equalTo: widthAnchor),
      passButton.heightAnchor.constraint(equalTo: heightAnchor),
    ])
  }

  @objc
  private func passButtonPressed() {
      onTap(
        [:]
      )

  }

}
