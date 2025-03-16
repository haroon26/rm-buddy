import * as vscode from "vscode";
import IssuesWebviewViewProvider from "./providers/issues";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "issues",
      new IssuesWebviewViewProvider(context)
    )
  );
}

export function deactivate() {}
