import React, {useState} from "react";

type Props = {
    open?: boolean;
    onClose?: () => void;
};

export const CreatePostDialog: React.FC<Props> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = () => {
        // Handle create post logic here
        console.log({title, content, image});
        setIsOpen(false);
    };

    return (
        <>
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => setIsOpen(true)}
            >
                Tạo bài viết
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
                    <div className="bg-white w-full max-w-xl rounded-2xl p-6 shadow-xl relative">
                        <h2 className="text-xl font-semibold mb-4">Tạo bài viết</h2>

                        <input
                            type="text"
                            placeholder="Tiêu đề..."
                            className="w-full p-3 border rounded-xl mb-3"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <textarea
                            placeholder="Nội dung..."
                            className="w-full p-3 border rounded-xl mb-3 resize-none h-32"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />

                        <input
                            type="file"
                            accept="image/*"
                            className="mb-3"
                            onChange={handleImageChange}
                        />

                        {preview && (
                            <img
                                src={preview}
                                alt="preview"
                                className="w-full max-h-64 object-contain rounded-xl mb-4"
                            />
                        )}

                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Đăng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}