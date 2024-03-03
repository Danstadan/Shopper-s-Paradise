import React from 'react';
import { useLocation } from 'react-router-dom';

function Privacy () {
    const location = useLocation();

    return(
        <div >
            <h3 className="mt-3" style={{textAlign: "center"}}> 
                Privacy Policy
            </h3>
            <h6 className="ps-2">
            Last updated: March 01 2024
            </h6>
            <div classsName="d-flex flex-column mb-3">
                                    <div className='p-2'>
                        Beaugar Limited operates the Shopper's Paradise App.

                        </div>
                        <div className='p-2'>
                        This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the App.

                        We use your Personal Information only for providing and improving the App. By using the App, you agree to the collection and use of information in accordance with this policy.
                        </div>
                        <div className='p-2'>
                        <p style={{fontWeight:"bold"}}>Information Collection and Use<br/></p>
                        While using our App, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").
                        </div>
                        <div className='p-2'>
                        <p style={{fontWeight:"bold"}}>Log Data<br/></p>
                        Like many app operators, we collect information that your browser sends whenever you use our App ("Log Data").

                        This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our App that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
                        </div>
                        <div className='p-2'>
                        <p style={{fontWeight:"bold"}}>Communications<br/></p>
                        We may use your Personal Information to contact you with newsletters, marketing, or promotional materials.
                        </div>
                        <div className='p-2'>
                        <p style={{fontWeight:"bold"}} >Cookies<br/></p>

                        Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive.

                        Like many apps, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our App.
                        </div>
                        <div className='p-2'>
                        <p style={{fontWeight:"bold"}}>Security<br/></p>

                        The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                        </div>
                        <div className='p-2'>
                        <p style={{fontWeight:"bold"}}>Changes to This Privacy Policy<br/></p>

                        This Privacy Policy is effective as of [Date] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.

                        We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the App after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.

                        If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.
                        </div>
                        <div className='p-2'>
                        <p style={{fontWeight:"bold"}}>Contact Us<br/></p>

                        If you have any questions about this Privacy Policy, please contact us.
                        </div>
            </div>
        </div>

    )
};

export default Privacy;