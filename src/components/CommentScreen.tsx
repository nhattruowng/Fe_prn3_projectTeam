import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

interface Comment {
    id: number
    name: string
    avatar: string
    content: string
    time: string
}

const sampleComments: Comment[] = [
    {
        id: 1,
        name: 'Alice',
        avatar: 'https://i.pravatar.cc/40?img=1',
        content: 'Bài viết rất hay và hữu ích, cảm ơn bạn!',
        time: '2 giờ trước',
    },
    {
        id: 2,
        name: 'Bob',
        avatar: 'https://i.pravatar.cc/40?img=2',
        content: 'Mình thích phần hình ảnh minh hoạ 🐱',
        time: '1 giờ trước',
    },{
        id: 2,
        name: 'Bob',
        avatar: 'https://i.pravatar.cc/40?img=2',
        content: 'Mình thích phần hình ảnh minh hoạ 🐱',
        time: '1 giờ trước',
    },{
        id: 2,
        name: 'Bob',
        avatar: 'https://i.pravatar.cc/40?img=2',
        content: 'Mình thích phần hình ảnh minh hoạ 🐱',
        time: '1 giờ trước',
    },{
        id: 2,
        name: 'Bob',
        avatar: 'https://i.pravatar.cc/40?img=2',
        content: 'Mình thích phần hình ảnh minh hoạ 🐱',
        time: '1 giờ trước',
    },{
        id: 2,
        name: 'Bob',
        avatar: 'https://i.pravatar.cc/40?img=2',
        content: 'Mình thích phần hình ảnh minh hoạ 🐱',
        time: '1 giờ trước',
    },{
        id: 2,
        name: 'Bob',
        avatar: 'https://i.pravatar.cc/40?img=2',
        content: 'Mình thích phần hình ảnh minh hoạ 🐱',
        time: '1 giờ trước',
    },{
        id: 2,
        name: 'Bob',
        avatar: 'https://i.pravatar.cc/40?img=2',
        content: 'Mình thích phần hình ảnh minh hoạ 🐱',
        time: '1 giờ trước',
    },
]

export default function CommentDialog() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
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
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                {/* Header */}
                                <Dialog.Title className="text-lg font-semibold text-gray-800 mb-4">
                                    Bình luận về bài viết
                                </Dialog.Title>

                                {/* Bài viết */}
                                <div className="mb-6">
                                    <img
                                        src="https://placekitten.com/600/300"
                                        alt="Post"
                                        className="rounded-xl w-full object-cover h-52"
                                    />
                                    <p className="mt-3 text-gray-700 text-sm">
                                        Một ngày tuyệt vời với mèo đáng yêu! 🐱 #CuteKitten #AdventureCat
                                    </p>
                                </div>

                                {/* Danh sách comment */}
                                <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                                    {sampleComments.map((c) => (
                                        <div key={c.id} className="flex items-start gap-3">
                                            <img src={c.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <p className="font-medium text-sm text-gray-800">{c.name}</p>
                                                <p className="text-xs text-gray-400">{c.time}</p>
                                                <p className="text-sm text-gray-700 mt-1">{c.content}</p>
                                            </div>
                                        </div>
                                    ))}
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

                                {/* Close button */}
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
