'use client';

import React, { useState } from 'react';

interface Rating {
    stars: number;
    count: number;
}

interface UserReview {
    user: string;
    review: string;
    stars: number;
    date: string;
}

const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill={filled ? "#FFD700" : "#D3D3D3"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.91 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
);

const Reviews: React.FC = () => {
    const ratings: Rating[] = [
        { stars: 5, count: 10 },
        { stars: 4, count: 7 },
        { stars: 3, count: 5 },
        { stars: 2, count: 2 },
        { stars: 1, count: 1 },
    ];

    const userReviews: UserReview[] = [
        { user: 'Alice', review: 'Great product! Highly recommend.', stars: 5, date: '2024-10-30' },
        { user: 'Bob', review: 'It works well, but the size was a bit off.', stars: 4, date: '2024-10-29' },
        { user: 'Charlie', review: 'Good value for money.', stars: 4, date: '2024-10-28' },
        { user: 'Diana', review: 'Not what I expected, but decent.', stars: 3, date: '2024-10-27' },
        { user: 'Eve', review: 'Fantastic! Will buy again.', stars: 5, date: '2024-10-26' },
        { user: 'Frank', review: 'Satisfactory but could be improved.', stars: 3, date: '2024-10-25' },
        { user: 'Grace', review: 'Excellent quality and fast shipping.', stars: 5, date: '2024-10-24' },
        { user: 'Hannah', review: 'Not bad, but I expected more.', stars: 3, date: '2024-10-23' },
        { user: 'Ian', review: 'Will recommend to my friends.', stars: 4, date: '2024-10-22' },
    ];

    const totalVotes = ratings.reduce((sum, rating) => sum + rating.count, 0);
    const averageRating = totalVotes > 0 ? (ratings.reduce((sum, rating) => sum + (rating.stars * rating.count), 0) / totalVotes) : 0;

    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [newReview, setNewReview] = useState<string>('');

    const handleRatingClick = (stars: number) => {
        setSelectedRating(stars);
    };

    const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview(event.target.value);
    };

    const handlePublish = () => {
        console.log(`Rating: ${selectedRating}, Review: ${newReview}`);
        // Xử lý lưu trữ đánh giá ở đây
    };

    return (
        <section className="flex justify-center p-5 min-h-[100%]">
            <div className="flex flex-col w-[105%] max-w-[105%] min-w-[105%] bg-gray-100 rounded-lg shadow-md md:flex-row">
                <div className="flex-1 md:flex-[2] p-5 border-b md:border-b-0 md:border-r border-gray-300">
                    <h3 className="text-black text-lg font-semibold">User Rating: {averageRating.toFixed(1)} out of 5 ⭐</h3>
                    <h4 className='mt-2 text-black font-semibold'>From {totalVotes} people </h4>
                    <div className="mt-2">
                        {ratings.map((rating, index) => {
                            const percentage = totalVotes > 0 ? ((rating.count / totalVotes) * 100).toFixed(0) : 0;
                            return (
                                <div key={index} className="mb-4">
                                    <div className="flex items-center justify-between">
                                        <span className="flex">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <StarIcon key={i} filled={i < rating.stars} />
                                            ))}
                                        </span>
                                        <span className="text-sm text-gray-600">{percentage}%</span>
                                    </div>
                                    <div className="relative mt-1 h-4 bg-gray-300 rounded">
                                        <div
                                            className="bg-green h-full rounded"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                <div className="flex-1 md:flex-[5] p-5 flex flex-col">
                    <h3 className="text-black text-lg font-semibold">Write Your Review</h3>
                    <div className="flex items-center mb-3">
                        {Array.from({ length: 5 }, (_, i) => (
                            <button key={i} onClick={() => handleRatingClick(i + 1)} className="focus:outline-none">
                                <StarIcon filled={i < (selectedRating || 0)} />
                            </button>
                        ))}
                    </div>
                    <textarea
                        value={newReview}
                        onChange={handleReviewChange}
                        placeholder="Write your review here..."
                        className="w-full h-20 p-2 mb-3 border border-gray-300 rounded resize-none text-black"
                    ></textarea>
                    <button className="my-1 bg-darkgreen hover:bg-green mx-auto w-full text-white p-2 rounded-full border-solid">
                        Publish
                    </button>
                    <div className="mt-4 flex-1">
                        <div className="max-h-[1000px] overflow-y-auto border border-gray-300 rounded p-2 bg-white">
                            {userReviews.map((userReview, index) => (
                                <div key={index} className="py-3 px-4 border border-gray-200 bg-gray-50 rounded-md shadow-sm mb-2 last:mb-0">
                                    <p className="text-black">
                                        <strong>{userReview.user}</strong>
                                        <span className="text-gray-600 text-sm ml-2">{new Date(userReview.date).toLocaleDateString()}</span>
                                    </p>
                                    <div className="flex mb-1">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <StarIcon key={i} filled={i < userReview.stars} />
                                        ))}
                                    </div>
                                    <p className='text-black'>
                                        {userReview.review}
                                    </p>
                                    <button className="my-1 bg-darkgreen hover:bg-green mx-auto w-[15%] text-white p-2 rounded-full border-solid">
                                        Helpful
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
