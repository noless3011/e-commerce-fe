import React from 'react';

interface Rating {
    stars: number;
    count: number;
}

interface UserReview {
    user: string;
    review: string;
}

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
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
        { user: 'Alice', review: 'Great product! Highly recommend.' },
        { user: 'Bob', review: 'It works well, but the size was a bit off.' },
        { user: 'Charlie', review: 'Good value for money.' },
        { user: 'Diana', review: 'Not what I expected, but decent.' },
        { user: 'Eve', review: 'Fantastic! Will buy again.' },
        { user: 'Frank', review: 'Satisfactory but could be improved.' },
        { user: 'Grace', review: 'Excellent quality and fast shipping.' },
        { user: 'Hannah', review: 'Not bad, but I expected more.' },
        { user: 'Ian', review: 'Will recommend to my friends.' },
    ];

    const maxVotes = Math.max(...ratings.map(rating => rating.count));

    // Styles defined in an object
    const styles: { [key: string]: React.CSSProperties } = {
        reviews: {
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
        },
        reviewContainer: {
            display: 'flex',
            width: '100%',
            maxWidth: '1200px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        ratingBox: {
            flex: 1,
            padding: '20px',
            borderRight: '1px solid #ddd',
        },
        writeReview: {
            flex: 4,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
        },
        ratingChart: {
            marginTop: '10px',
        },
        ratingRow: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '5px',
            justifyContent: 'space-between', // Aligns items properly
            width: '100%', // Ensures full width
        },
        stars: {
            display: 'flex',
            marginRight: '2px',
        },
        voteBar: {
            flex: '1 0 50%',
            backgroundColor: '#b0b0b0',
            borderRadius: '4px',
            height: '20px',
            position: 'relative',
            marginLeft: '2px',
            maxWidth: '100px', 
        },
        voteCount: {
            backgroundColor: '#5cbf63',
            height: '100%',
            borderRadius: '4px',
            position: 'absolute',
            left: 0,
            top: 0,
        },
        reviewTextarea: {
            width: '100%',
            height: '80px',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            resize: 'vertical',
            color: 'black',
        },
        publishButton: {
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '4px',
        },
        userReviews: {
            marginTop: '20px',
            flex: 1,
        },
        reviewBox: {
            maxHeight: '200px',
            overflowY: 'auto',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: '#fff',
        },
        review: {
            padding: '5px 0',
            borderBottom: '1px solid #ddd',
        },
        reviewLast: {
            borderBottom: 'none',
        },
    };

    return (
        <section style={styles.reviews}>
            <div style={styles.reviewContainer}>
                <div style={styles.ratingBox}>
                    <h3 style={{ color: 'black' }}>User Rating</h3>
                    <div style={styles.ratingChart}>
                        {ratings.map((rating, index) => (
                            <div key={index} style={styles.ratingRow}>
                                <span style={styles.stars}>
                                    {Array.from({ length: rating.stars }, (_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                </span>
                                <div style={styles.voteBar}>
                                    <div
                                        style={{
                                            ...styles.voteCount,
                                            width: `${(rating.count / maxVotes) * 100}%`,
                                        }}
                                    >
                                        {rating.count}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={styles.writeReview}>
                    <h3 style={{ color: 'black' }}>Write your review</h3>
                    <textarea placeholder="Write your review here..." style={styles.reviewTextarea}></textarea>
                    <button style={styles.publishButton}>Publish</button>
                    <div style={styles.userReviews}>
                        <h3 style={{ color: 'black' }}>User Samples</h3>
                        <div style={styles.reviewBox}>
                            {userReviews.map((userReview, index) => (
                                <div key={index} style={styles.review}>
                                    <p style={{ color: 'black' }}><strong>{userReview.user}</strong> - {userReview.review}</p>
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
