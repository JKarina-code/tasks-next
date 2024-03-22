"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function PageForm({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });

      router.push("/");
    } else {
      await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });

      router.refresh();
      router.push("/");
    }
  };

  const deleteTask = async () => {
    await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    });
    router.refresh();
    router.push("/");
  };
  return (
    <div div className="p-5">
      <button
        type="button"
        className="bg-green-500 hover:bg-green-700  font-bold py-2 px-4 rounded text-white"
        onClick={() => router.back()}
      >
        Back
      </button>
      <div className="h-screen flex justify-center items-center">
        <form
          className="bg-slate-700 p-10 text-white w-1/4"
          onSubmit={onSubmit}
        >
          <label htmlFor="title" className="font-bold  text-sm">
            Task title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="border border-gray-400 p-2 mb-4 w-full text-black"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <label htmlFor="description"> Task description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            className="border border-gray-400 p-2 mb-4 w-full text-black"
            placeholder="Add your task"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>

          <div className="flex justify-evenly">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded"
            >
              {" "}
              {params.id ? "Update" : "Add"}
            </button>

            {params.id && (
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700  font-bold py-2 px-4  rounded"
                onClick={() => deleteTask()}
              >
                {" "}
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default PageForm;
