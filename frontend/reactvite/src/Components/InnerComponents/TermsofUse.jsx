import React from "react";
import { useLocation } from "react-router-dom";

function TermsofService () {
    const location = useLocation();

    return(
        <div>
            <h3 className="mt-3" style={{textAlign: "center"}}>Terms of Use</h3>
            <div classsName="d-flex flex-column mb-3">
<div className='p-2'>
These Terms of Use ("Terms") govern your use of Shopper's Paradise Website ("the Service") operated by Beaugar Limited ("us", "we", or "our").

By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
</div>
<div className='p-2'>
<p style={{fontWeight:"bold"}}>Content</p>

Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.

By posting Content on or through the Service, you represent and warrant that: <br/>(i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and<br/> (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity.
</div>
<div className='p-2'>
<p style={{fontWeight:"bold"}}>Links to Other Web Sites</p>

Our Service may contain links to third-party web sites or services that are not owned or controlled by Beaugar Limited.

Beaugar Limited has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Beaugar Limited shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.

We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
</div>
<div className='p-2'>
<p style={{fontWeight:"bold"}}>Changes</p>

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
</div>
<div className='p-2'>
<p style={{fontWeight:"bold"}}>Contact Us</p>

If you have any questions about these Terms, please contact us.
</div>
        </div>
        </div>
    )
};

export default TermsofService;