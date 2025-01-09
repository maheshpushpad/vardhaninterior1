import React from 'react';

const generateInitialImage = (name) => {
    const initial = name.charAt(0).toUpperCase();
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 64;
    canvas.height = 64;

    // Background color
    context.fillStyle = '#65422e';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Text settings
    context.font = '32px Arial';
    context.fillStyle = '#fff';
    // context.fillStyle = '#333';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(initial, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL('image/png');
};

const TestimonialCard = ({ name, image, rating, text }) => {
    const initialImage = generateInitialImage(name);

    return (
        <div className="bg-white rounded-lg shadow-lg hover:scale-90 mb-8 duration-300 border-black border hover:shadow-gray-700 hover:animate-bounce p-6">
            <div className="flex items-center">
                <img
                    src={image || initialImage}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                    <h3 className="text-lg text-[#65422e] font-semibold">{name}</h3>
                    <div className="flex items-center">
                        {[...Array(rating)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-yellow-500"
                            >
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
            <p className="mt-4">{text}</p>
        </div>
    );
};

const Review = () => {
    return (
        <div>
            <div className="text-center mt-4">
                <h1 className="text-4xl text-[#65422e] font-bold underline">Testimonials</h1>
                <p className="mt-4">See what our clients have to say about our services.</p>
            </div>

            {/* Testimonial cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mt-10">
    <TestimonialCard
        name="Amit Sharma"
        image=""
        rating={4}
        text="Excellent service! The design transformed our living space beautifully. Highly recommend for anyone looking to revamp their home interiors."
    />
    <TestimonialCard
        name="Priya Patel"
        image=""
        rating={5}
        text="The team did an outstanding job with our kitchen. Every detail was meticulously handled, resulting in a stunning and functional space."
    />
    <TestimonialCard
        name="Rahul Verma"
        image=""
        rating={3}
        text="Good work overall, but there were some delays in the project timeline. However, the final outcome was satisfactory and met our expectations."
    />
    <TestimonialCard
        name="Sneha Reddy"
        image=""
        rating={5}
        text="Fantastic experience! The designers were very professional and understood our needs perfectly. Our bedroom looks amazing now."
    />
    <TestimonialCard
        name="Arjun Mehta"
        image=""
        rating={4}
        text="Great service with attention to detail. The team was very accommodating to our requests and delivered a beautiful design for our living room."
    />
    <TestimonialCard
        name="Meera Nair"
        image=""
        rating={5}
        text="The redesign of our office space was brilliant. It now feels much more spacious and vibrant. Kudos to the interior design team."
    />
    <TestimonialCard
        name="Vikram Singh"
        image=""
        rating={4}
        text="Impressive work on our dining area. The modern look and functionality improvements have made a big difference. Thank you for your efforts."
    />
    <TestimonialCard
        name="Anita Desai"
        image=""
        rating={5}
        text="Our new drawing room is stunning! The designers exceeded our expectations with their creativity and professionalism. Highly recommend their services."
    />
    <TestimonialCard
        name="Rohan Gupta"
        image=""
        rating={4}
        text="The team was responsive and dedicated. They transformed our entrance area into a welcoming and elegant space. Very pleased with the results."
    />
    <TestimonialCard
        name="Sonia Kapoor"
        image=""
        rating={5}
        text="Outstanding service! The attention to detail and commitment to quality were evident in every aspect of the design process. Truly exceptional work."
    />
</div>

        </div>
    );
}

export default Review;
