import {TweetCard} from "../components/TweetCard.tsx";
import {useEffect, useMemo, useState, useRef, useCallback} from "react";
import type {BlogFillterRequet} from "../modole/request/BlogFillterRequet.ts";
import {useGetAllBlog} from "../hooks/BlogHooks.ts";
import type {GetBlogRespont} from "../modole/respont/BlogRespont.ts";

export const TwitterHomeFeed = () => {
    const [page, setPage] = useState<number>(1);
    const [list, setList] = useState<GetBlogRespont[]>([]);
    const {data, run, loading} = useGetAllBlog();
    const observerRef = useRef<HTMLDivElement | null>(null);

    console.log(data)

    const filter = useMemo<BlogFillterRequet>(() => ({
        PageNumber: page,
        PageSize: 10,
        filterType: 0,
        status: 1,
    }), [page]);

    useEffect(() => {
        run(filter);
    }, [filter]);

    useEffect(() => {
        if (data?.items) {
            setList(prev => {
                const existingIds = new Set(prev.map(item => item.id));
                const newItems = data.items.filter(item => !existingIds.has(item.id));
                return [...prev, ...newItems];
            });
        }
    }, [data?.items]);


    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
            setPage(prev => prev + 1);
        }
    }, [loading]);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (observerRef.current) observer.observe(observerRef.current);
        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [handleObserver]);

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-2xl mx-auto border-x">
                {list.map((tweet) => (
                    <TweetCard key={tweet.id} tweet={tweet}/>
                ))}
                {loading && (
                    <div className="text-center text-gray-500 py-4">Đang tải...</div>
                )}
                <div ref={observerRef} className="h-10"></div>
            </div>
        </div>
    );
};
