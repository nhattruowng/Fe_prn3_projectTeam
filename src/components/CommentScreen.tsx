import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import type {GetBlogRespont} from "../modole/respont/BlogRespont.ts";

type Prop ={
    GetBlogRespont:GetBlogRespont;
    onClose :   () => void;
}

export default function CommentDialog({GetBlogRespont,onClose}:Prop) {
    const [isOpen, setIsOpen] = useState(true)

    const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => onClose(), 200);
    }

    return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <Dialog.Title className="text-lg font-semibold text-gray-800 mb-4">
                  Bình luận về bài viết
                </Dialog.Title>

                <div className="mb-6">
                  <img
                    src={GetBlogRespont.featuredImageUrl}
                    alt={GetBlogRespont.title}
                    className="rounded-xl w-full object-cover h-52"
                  />
                  <h2 className="mt-3 text-xl font-bold text-gray-800">{GetBlogRespont.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">{GetBlogRespont.content}</p>

                  <div className="mt-2 text-xs text-gray-400 flex gap-4">
                    <span>Tác giả: {GetBlogRespont.authorName || 'Ẩn danh'}</span>
                    <span>Lượt xem: {GetBlogRespont.views}</span>
                    <span>Ngày đăng: {new Date(GetBlogRespont.publishedDate).toLocaleDateString('vi-VN')}</span>
                  </div>
                </div>

                {/* Danh sách comment */}
                <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                  {GetBlogRespont.comments && GetBlogRespont.comments.length > 0 ? (
                    GetBlogRespont.comments.map((c, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div>
                          <p className="font-medium text-sm text-gray-800">{c.userName}</p>
                          <p className="text-xs text-gray-400">{c.createdTime}</p>
                          <p className="text-sm text-gray-700 mt-1">{c.comment}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">Chưa có bình luận nào.</p>
                  )}
                </div>

                {/* Nhập bình luận */}
                <div className="pt-4 mt-4 border-t">
                  <textarea
                    rows={2}
                    placeholder="Viết bình luận..."
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                    Gửi bình luận
                  </button>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
