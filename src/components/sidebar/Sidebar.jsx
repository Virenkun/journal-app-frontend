import { useState } from "react";
import { createJournal } from "../../service/journalService/journalService";
import { verifyToken } from "../../service/userService/userservice";

export const Sidebar = () => {
  const [isCreatingJournal, setIsCreatingJournal] = useState(false);
  const [journalTitle, setJournalTitle] = useState("");
  const [journalContent, setJournalContent] = useState("");

  const handleCreateJournal = () => {
    setIsCreatingJournal(true);
  };

  const handleCancel = () => {
    setIsCreatingJournal(false);
    setJournalTitle("");
    setJournalContent("");
  };

  const handleSaveJournal = () => {
    setJournalTitle("");
    setJournalContent("");
    setIsCreatingJournal(false);
  };

  return (
    <div>
      <aside className="flex h-screen w-64 flex-col overflow-y-auto bg-white px-5 py-8">
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                Journal
              </label>
              <a
                onClick={handleCreateJournal}
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                href="#"
              >
                <img src="src/assets/create-icon.svg" className="h-[22px]" />
                <span className="mx-2 text-sm font-medium">Create Journal</span>
              </a>
              {/* Add other navigation items */}
            </div>
            {/* Add other navigation sections */}
          </nav>
          {/* Add other content */}
        </div>
      </aside>

      {/* Journal Creation Form */}
      {isCreatingJournal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Create Journal</h2>
            <input
              type="text"
              value={journalTitle}
              onChange={(e) => setJournalTitle(e.target.value)}
              placeholder="Title"
              className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full"
            />
            <textarea
              value={journalContent}
              onChange={(e) => setJournalContent(e.target.value)}
              placeholder="Content"
              rows="4"
              className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full resize-none"
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleCancel}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveJournal}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
