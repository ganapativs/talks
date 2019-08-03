import Provider from "./Provider";
import CodeHighlight from "./CodeHighlight";

export default {
  fonts: {
    body: "'Share', cursive",
    monospace: "'Inconsolata', monospace"
  },
  colors: {
    text: "#ffe877",
    background: "#15202b",
    primary: "#E91E63",
    black: "#252424",
    darkYellow: "#4a4737",
    white: "#fff"
  },
  googleFont:
    "https://fonts.googleapis.com/css?family=Inconsolata|Share&display=swap",
  Provider,
  components: {
    code: CodeHighlight
  }
};
