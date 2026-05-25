import { useState } from "react";

import Toolbar from "./Toolbar";
import CodeEditor from "./CodeEditor";
import OutputPanel from "./OutputPanel";

export default function EditorLayout() {

  const [code, setCode] = useState( `print("Hello Syntaxa")`);

  const [language, setLanguage] =
    useState("python");

  const [output, setOutput] =
    useState("");

  return (
    <div className="h-full flex flex-col">

      {/* TOPBAR */}
      <Toolbar
        language={language}
        setLanguage={setLanguage}
        code={code}
        setOutput={setOutput}
      />

      {/* EDITOR */}
      <div className="flex-1 overflow-hidden">

        <CodeEditor
          code={code}
          setCode={setCode}
          language={language}
        />

      </div>

      {/* OUTPUT */}
      <OutputPanel output={output} />

    </div>
  );
}