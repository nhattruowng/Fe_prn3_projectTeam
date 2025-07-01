import {useEffect, useRef, useCallback} from "react";

interface UseInfiniteScrollProps {
    onLoadMore: () => void;
    loading: boolean;
    rootMargin?: string;
    threshold?: number;
}

export const useInfiniteScroll = ({
                                      onLoadMore,
                                      loading,
                                      rootMargin = "20px",
                                      threshold = 1.0,
                                  }: UseInfiniteScrollProps) => {
    const observerRef = useRef<HTMLDivElement | null>(null);

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting && !loading) {
                onLoadMore();
            }
        },
        [loading, onLoadMore]
    );

    useEffect(() => {
        const option = {
            root: null,
            rootMargin,
            threshold,
        };

        const observer = new IntersectionObserver(handleObserver, option);
        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [handleObserver, rootMargin, threshold]);

    return {observerRef};
};
