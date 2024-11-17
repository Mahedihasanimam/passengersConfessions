import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const FAQPage = () => {
    return (
        <div className="container mx-auto my-10 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <Collapse defaultActiveKey={['1']} accordion>
                <Panel className='text-gray-700 text-xl' header="What is this website about?" key="1">
                    <p>
                        Our website is an affiliate platform where you can browse and purchase books from various genres. 
                        We connect you with the best deals and ensure you have an easy and secure purchasing experience.
                    </p>
                </Panel>
                <Panel className='text-gray-700 text-xl' header="How can I purchase a book?" key="2">
                    <p>
                        To purchase a book, simply browse through our collection, select the book you like, and click on the 
                        'Buy Now' button. You will be redirected to our partner’s site to complete your purchase.
                    </p>
                </Panel>
                <Panel className='text-gray-700 text-xl' header="What payment methods are available?" key="3">
                    <p>
                        Payment options depend on our affiliate partners. Most partners accept major credit/debit cards, 
                        PayPal, and other secure payment methods.
                    </p>
                </Panel>
                <Panel className='text-gray-700 text-xl' header="Do you offer discounts or promotions?" key="4">
                    <p>
                        Yes, we regularly update our website with discounts and special promotions from our affiliate partners. 
                        Keep an eye on our homepage or subscribe to our newsletter for the latest offers.
                    </p>
                </Panel>
                <Panel className='text-gray-700 text-xl' header="Can I track my order?" key="5">
                    <p>
                        Once your purchase is completed on our partner’s site, they will provide tracking information via email 
                        or their order tracking page.
                    </p>
                </Panel>
                <Panel className='text-gray-700 text-xl' header="What is the return policy for books?" key="6">
                    <p>
                        Return policies are determined by our affiliate partners. Please refer to the return policy section 
                        on the partner’s website for detailed information.
                    </p>
                </Panel>
                <Panel className='text-gray-700 text-xl' header="How do I contact customer support?" key="7">
                    <p>
                        For questions or issues related to purchases, please contact the customer support team of our 
                        affiliate partner directly. For website-related inquiries, you can reach us at support@ourwebsite.com.
                    </p>
                </Panel>
                <Panel className='text-gray-700 text-xl' header="Are there any membership benefits?" key="8">
                    <p>
                        Yes, signing up for our newsletter or creating an account provides exclusive access to special 
                        promotions, book recommendations, and updates on new arrivals.
                    </p>
                </Panel>
            </Collapse>
        </div>
    );
};

export default FAQPage;
