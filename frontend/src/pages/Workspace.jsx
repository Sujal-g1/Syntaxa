import EditorLayout from "../components/editor/EditorLayout";

export default function Workspace() {
  return (
    <div className="
      h-screen
      overflow-hidden
      bg-[#02040a]
      text-white
    ">
      <EditorLayout />
    </div>
  );
}