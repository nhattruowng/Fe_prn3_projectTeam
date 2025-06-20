import React, {useState} from "react";

export const CreatBlog: React.FC = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImagePreview(imageURL);
        } else {
            setImagePreview(null);
        }
    };
    return (
        <>
            <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
                        <textarea
                            rows={3}
                            placeholder="Bạn đang nghĩ gì?"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                <div>
                    <label className="text-sm font-medium block mb-1">Đính kèm file</label>
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block w-full text-sm border border-gray-300 rounded-md file:px-4 file:py-2 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                        />

                        {imagePreview && (
                            <div className="mt-4">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-full max-w-sm rounded-md border"
                                />
                            </div>
                        )}
                    </div>

                </div>
                <div className="flex justify-between items-center">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                        Đăng bài
                    </button>
                    <span className="text-xs text-gray-400">Tối đa 280 ký tự</span>
                </div>
            </div>
        </>
    );
}