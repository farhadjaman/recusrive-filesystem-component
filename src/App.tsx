import {
  ChevronDown,
  ChevronRight,
  FileIcon,
  Folder as FolderIcon,
} from "lucide-react";
import { useState } from "react";

interface Node {
  name: string;
  nodes?: Node[];
}

const nodes: Node = {
  name: "Home",
  nodes: [
    {
      name: "Movies",
      nodes: [
        {
          name: "Action",
          nodes: [{ name: "Superhero" }, { name: "Thriller" }],
        },
        { name: "Comedy.txt", nodes: [] },
        { name: "Drama.txt", nodes: [] },
        { name: "Horror.txt", nodes: [] },
        { name: "Sci-Fi.txt", nodes: [] },
      ],
    },
    {
      name: "Documents",
      nodes: [
        { name: "Invoices", nodes: [] },
        { name: "Receipts.txt", nodes: [] },
        { name: "Reports", nodes: [] },
        { name: "Tax", nodes: [] },
      ],
    },
    { name: "Desktop.txt", nodes: [] },
    { name: "Downloads.txt", nodes: [] },
    { name: "Music.txt", nodes: [] },
    { name: "Pictures.txt", nodes: [] },
  ],
};

function App() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        <li className="my-1.5 pl-6">
          <FileSystemItem node={nodes} />
        </li>
      </ul>
    </div>
  );
}

export default App;

const FileSystemItem = ({ node }: { node: Node }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center gap-1.5">
        {node.nodes && node.nodes.length > 0 ? (
          <>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <ChevronDown /> : <ChevronRight />}
            </button>
            <FolderIcon className="w-5 h-5 mr-2" />
          </>
        ) : (
          <FileIcon className="w-5 h-5 mr-2" />
        )}
        <span>{node.name}</span>
      </div>
      {isOpen && node.nodes && node.nodes.length > 0 && (
        <ul className="pl-6">
          {node.nodes.map((node, index) => (
            <li key={index} className="my-1.5">
              <FileSystemItem node={node} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
