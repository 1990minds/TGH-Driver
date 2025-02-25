import React from 'react';
import Tring from "../../assets/tring.gif";
// import WorkflowImg from "../../assets/workflow.gif";
import AnalyticsImg from "../../assets/analytics.gif";
import CollaborationImg from "../../assets/collaboration.gif";
import SupportImg from "../../assets/support.gif";

const Features = () => {
    const Feature = ({ title, imageSrc, Desc }) => (
        <div className="flex flex-col items-center text-center space-y-4 border border-gray-300 p-6 rounded-lg shadow-lg">
            <div className="p-4 bg-white  rounded-full">
                <img src={imageSrc} className="h-12 w-12" alt={title} />
            </div>
            <h3 className="text-2xl font-extrabold">{title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
                {Desc}
            </p>
        </div>
    );

    return (
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6 md:px-10">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-center mb-12">
                    Features
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[
                        {
                            title: 'Automated Workflows',
                            image: Tring,
                            des:"Automatically fetches the collabs based on predefined rules."
                        },
                        {
                            title: 'Real-time Pricing',
                            image: AnalyticsImg,
                            des:"Use real-time data to make immediate changes for better results."
                        },
                        {
                            title: 'Track Rides',
                            image: CollaborationImg,
                            des:"Maintain a detailed timeline of each collaboration, from initiation to completion, including milestones and deadlines."
                        },
                        {
                            title: '24/7 Support',
                            image: SupportImg,
                            des:"Access dedicated support anytime, whether it’s late-night driver onboarding or troubleshooting campaign tools."
                        },
                    ].map((feature, index) => (
                        <Feature key={index} title={feature.title} imageSrc={feature.image} Desc={feature.des}  />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
