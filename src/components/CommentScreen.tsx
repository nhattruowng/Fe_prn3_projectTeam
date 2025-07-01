import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useEffect, useRef, useState} from 'react'
import {useCreateFeedback, useGetFeedbackByBlogId} from "../hooks/FeedBackHooks.ts";
import {useGetBlogId, useViewBlog} from "../hooks/BlogHooks.ts";
import type {CreatFeedback} from "../modole/request/FeedbackRequest.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

type Prop = {
    GetBlogRespont: string;
    onClose: () => void;
}

export default function CommentDialog({GetBlogRespont, onClose}: Prop) {
    const user = useSelector((state: RootState) => state.user.user);
    const [isOpen, setIsOpen] = useState(true);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);


    const {run: runFeedback} = useCreateFeedback();
    const {run: viewBlog} = useViewBlog();
    const {data: dataBlog, run: runBlog} = useGetBlogId();
    const {data: dataGetFeedback, run: runGetFeedback, loading: loadingComment} = useGetFeedbackByBlogId();


    const [comment, setComment] = useState<string>("");

    const handleClose = () => {
        textareaRef.current?.blur();
        setIsOpen(false);
        setTimeout(() => {
            onClose();
        }, 200);
    };

    useEffect(() => {
        return () => {
            textareaRef.current?.blur();
        }
    }, []);

    useEffect(() => {
        handleLoagData().then();
    }, [GetBlogRespont]);

    const handleLoagData = async () => {
        await runBlog(GetBlogRespont);
        await runGetFeedback(GetBlogRespont, 100, 1);
    }

    const handleComment = async () => {

        const data: CreatFeedback = {
            comment: comment,
            blogId: GetBlogRespont,
        }
        await runFeedback(data, user?.accessToken ?? "");
        await handleLoagData();
        await viewBlog(GetBlogRespont, user?.accessToken ?? "");
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
                    <div className="fixed inset-0 bg-black bg-opacity-30"/>
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
                            <Dialog.Panel
                                className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                                <Dialog.Title className="text-lg font-semibold text-gray-800 mb-4">
                                    Bài viết
                                </Dialog.Title>

                                <div className="mb-6">
                                    <img
                                        src={dataBlog?.data?.featuredImageUrl}
                                        alt={dataBlog?.data?.title}
                                        className="rounded-xl w-full object-cover h-52"
                                    />
                                    <h2 className="mt-3 text-xl font-bold text-gray-800">{dataBlog?.data?.title}</h2>
                                    <p className="text-sm text-gray-600 mt-1">{dataBlog?.data?.content}</p>

                                    <div className="mt-2 text-xs text-gray-400 flex gap-4">
                                        <span>Tác giả: {dataBlog?.data?.authorName || 'Ẩn danh'}</span>
                                        <span>Lượt xem: {dataBlog?.data?.status}</span>
                                        <span>Ngày đăng: {dataBlog?.data?.publishedDate}</span>
                                    </div>
                                </div>
                                <hr/>

                                <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                                    {!loadingComment && (dataGetFeedback?.items.length ?? 0) === 0 && (
                                        <p className="text-gray-500 text-sm text-center">Chưa có bình luận nào.</p>
                                    )}

                                    {!loadingComment && (dataGetFeedback?.items.length ?? 0) > 0 && (
                                        dataGetFeedback?.items!.map((c, index) => (
                                            <div key={index}
                                                 className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 shadow-sm">
                                                <img
                                                    src={c.userImage}
                                                    alt={c.userName}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />

                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <p className="font-semibold text-sm text-gray-800">{c.userName}</p>
                                                        <p className="text-xs text-gray-400">{c.createdTime}</p>
                                                    </div>
                                                    <p className="text-sm text-gray-700 mt-1">{c.comment}</p>
                                                </div>
                                            </div>

                                        ))
                                    )}

                                </div>


                                <div className="pt-4 mt-4 border-t">
                                    <textarea
                                        onChange={event => setComment(event.target.value)}
                                        ref={textareaRef}
                                        rows={2}
                                        placeholder="Viết bình luận..."
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    />
                                    <button
                                        onClick={() => handleComment()}
                                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                                        Gửi bình luận
                                    </button>
                                </div>

                                <button
                                    onClick={handleClose}
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
    );
}
