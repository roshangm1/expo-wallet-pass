import ExpoModulesCore
import PassKit

public class WalletButtonModule: Module {
  public func definition() -> ModuleDefinition {
    Name("WalletButton")

    View(WalletButtonView.self) {
      Events("onPress")

    }

  }
}
