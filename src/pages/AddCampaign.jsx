import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import DOMPurify from "dompurify";
import { postApiKey } from "../services/api";

export default function CampaignForm() {
  const [form, setForm] = useState({
    sponsored: false,
    organizer: "",
    title: "",
    description: "",
    goal: "",
    raised: 0,
    donors: 0,
    daysLeft: "",
  });

  const [longDescription, setLongDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  // Handle normal inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle image selection + preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image!");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("sponsored", form.sponsored);
      formData.append("organizer", form.organizer);
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("longDescription", DOMPurify.sanitize(longDescription));
      formData.append("goal", form.goal);
      formData.append("raised", form.raised);
      formData.append("donors", form.donors);
      formData.append("daysLeft", form.daysLeft);
      formData.append("image", imageFile);
      formData.append("logo", "");

      const res = await postApiKey(
        "/create-upload-apikey/register-donation_campaigns",
        formData,
        true
      );

      alert(res.message);
      setForm({
        sponsored: false,
        organizer: "",
        title: "",
        description: "",
        goal: "",
        raised: 0,
        donors: 0,
        daysLeft: "",
      });
      setLongDescription("");
      setImageFile(null);
      setImagePreview(null);
    } catch (err) {
      console.error(err);
      alert("Error posting campaign");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center px-4 py-10 bg-gray-50 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full space-y-6 bg-white p-8 sm:p-10 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Create Campaign
        </h2>

        {/* Sponsored */}
        <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            name="sponsored"
            checked={form.sponsored}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300"
          />
          Sponsored campaign
        </label>

        {/* Organizer */}
        <input
          name="organizer"
          placeholder="Organizer name"
          value={form.organizer}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
        />

        {/* Title */}
        <input
          name="title"
          placeholder="Campaign title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
        />

        {/* Short description */}
        <input
          name="description"
          placeholder="Short description"
          value={form.description}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm"
        />

        {/* Goal */}
        <input
          type="number"
          name="goal"
          placeholder="Goal amount"
          value={form.goal}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm"
        />

        {/* Raised */}
        <input
          type="number"
          name="raised"
          placeholder="Raised amount"
          value={form.raised}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm"
        />

        {/* Donors */}
        <input
          type="number"
          name="donors"
          placeholder="Number of donors"
          value={form.donors}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm"
        />

        {/* Days left */}
        <input
          type="number"
          name="daysLeft"
          placeholder="Days left"
          value={form.daysLeft}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm"
        />

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Campaign Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-3 h-40 w-full object-cover rounded-lg"
            />
          )}
        </div>

        {/* Long Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Long Description
          </label>
          <Editor
            apiKey="rupscta98j66vsrctzvbd1rnv16kqe1grn4iv4qcr6d9tayj"
            init={{
              height: 300,
              menubar: false,
              plugins: "lists link image table paste wordcount",
              toolbar:
                "undo redo | bold italic underline | bullist numlist | table link image",
              images_upload_handler: async (blobInfo) => {
                // Example: convert image to Base64 and insert
                return `data:${
                  blobInfo.blob().type
                };base64,${await blobToBase64(blobInfo.blob())}`;
              },
            }}
            value={longDescription}
            onEditorChange={(content) =>
              setLongDescription(DOMPurify.sanitize(content))
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Posting..." : "Add Campaign"}
        </button>
      </form>
    </div>
  );
}

// Helper function to convert blob to base64
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
