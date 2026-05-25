import Editor from "@monaco-editor/react";

export default function CodeEditor({
  code,
  setCode,
  language,
}) {
  return (
    <Editor
      height="100%"
      language={language}
      value={code}
      onChange={(value) =>
        setCode(value)
      }
      theme="vs-dark"
      options={{

        fontSize: 15,

        minimap: {
          enabled: false,
        },

        smoothScrolling: true,

        automaticLayout: true,

        fontFamily:
          "'JetBrains Mono', monospace",

        padding: {
          top: 20,
        },

      }}
    />
  );
}