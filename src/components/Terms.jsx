import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Col, Row, Navbar, Nav } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Terms = () => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="Navbar custom-sticky">
        <Container className="nbar">
          <Navbar.Brand href="/">
            <img src="./loogo.png" alt="logo" className="logo-img" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border border-0 Nav-Toggle"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            <i className={`bi ${expanded ? "bi-x" : "bi-filter-right"}`}></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="menu-event">
            <Nav className="me-auto tem">
              <Nav.Link as={NavLink} to="/" className="">
                Home
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/blog" className="d-none">
                Blog
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/faqs" className="">
                FAQS
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="">
                Contact
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>
              <Nav.Link className="footer-Angle2">
                Contact
                <i class="bi bi-chevron-right footer-Angle2"></i>
              </Nav.Link>
            </Nav>
            <Nav
              as={NavLink}
              to="https://play.google.com/store/apps/details?id=com.palynx.app"
              className="bav-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="F-btn">
                <Nav href="#donload" className="D-app">
                  Download the App
                </Nav>
              </button>
            </Nav>

            <div className="Navbar-icon-Cont">
              <h6>
                We are <span>Social</span>
              </h6>
              <div className="d-flex  Navbar-iconMobile">
                <Link
                  to=" https://www.linkedin.com/company/palynxapp/"
                  className="Linked-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-icon7">
                    <BiLogoLinkedin />
                  </button>
                </Link>
                <Link
                  to="https://www.instagram.com/palynxapp?igsh=cTd0Zmp5eG42NGgw"
                  className="Linked-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-icon7">
                    <BsInstagram />
                  </button>
                </Link>
                <Link
                  to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                  className="Linked-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-icon7">
                    <FaFacebookF />
                  </button>
                </Link>
                <Link
                  to="https://x.com/palynxapp"
                  className="Linked-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-icon7">
                    <FaXTwitter />
                  </button>
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="policy">
        <Row>
          <Col md={12} sm={12} className="policy-Tag">
            <div>
              <h3>Terms of use</h3>
              <pre>Last modified: May 6, 2024</pre>
              <h6>Acceptance of the Terms of Use</h6>
              <p>
                These terms of use are entered into by and between you and
                Palynx, Inc. ("Company," "we," or " us"). The following terms
                and conditions, together with any documents they expressly
                incorporate by reference (collectively, "Terms of Use"), govern
                your access to and use of www.palynx.com, including any content,
                functionality, and services offered on or through www.palynx.com
                (the "Website"), whether as a guest or a registered user. Please
                read the Terms of Use carefully before you start to use the
                Website. By using the Website or by clicking to accept or agree
                to the Terms of Use when this option is made available to you,
                you accept and agree to be bound and abide by these Terms of Use
                and our Privacy Policy, found here, incorporated herein by
                reference. If you do not want to agree to these Terms of Use or
                the Privacy Policy, you must not access or use the Website. This
                Website is offered and available to users who are 18 years of
                age or older. By using this Website, you represent and warrant
                that you are of legal age to form a binding contract with the
                Company and meet all of the foregoing eligibility requirements.
                If you do not meet all of these requirements, you must not
                access or use the Website.
              </p>
              <h6>Changes to the Terms of Use</h6>
              <p>
                We may revise and update these Terms of Use from time to time in
                our sole discretion. All changes are effective immediately when
                we post them, and apply to all access to and use of the Website
                thereafter. Your continued use of the Website following the
                posting of revised Terms of Use means that you accept and agree
                to the changes. You are expected to check this page from time to
                time so you are aware of any changes, as they are binding on
                you.
              </p>
              <h6>Accessing the Website and Account Security</h6>
              <p>
                We reserve the right to withdraw or amend this Website, and any
                service or material we provide on the Website, in our sole
                discretion without notice. We will not be liable if for any
                reason all or any part of the Website is unavailable at any time
                or for any period. From time to time, we may restrict user
                access, including registered user access, to some parts of the
                Website or the entire Website. You are responsible for both:
                <br />
                <ul className="mt-4">
                  <li>
                    Making all arrangements necessary for you to have access to
                    the Website.
                  </li>

                  <li>
                    Ensuring that all persons who access the Website through
                    your internet connection are aware of these Terms of Use and
                    comply with them.
                  </li>
                </ul>
                To access the Website or some of the resources it offers, you
                may be asked to provide certain registration details or other
                information. It is a condition of your use of the Website that
                all the information you provide on the Website is correct,
                current, and complete. You agree that all information you
                provide to register with this Website or otherwise, including,
                but not limited to,through the use of any interactive features
                on the Website, is governed by our Privacy Policy, and you
                consent to all actions we take with respect to your information
                consistent with our Privacy Policy. If you choose, or are
                provided with, a username, password, or any other piece of
                information as part of our security procedures, you must treat
                such information as confidential, and you must not disclose it
                to any other person or entity. You also acknowledge that your
                account is personal to you and agree not to provide any other
                person with access to this Website or portions of it using your
                username, password, or other security information. You agree to
                notify us immediately of any unauthorized access to or use of
                your username or password or any other breach of security. You
                also agree to ensure that you exit from your account at the end
                of each session. You should use particular caution when
                accessing your account from a public or shared computer so that
                others are not able to view or record your password or other
                personal information. We have the right to disable any username,
                password, or other identifier, whether chosen by you or provided
                by us, at any time in our sole discretion for any or no reason,
                including if, in our opinion, you have violated any provision of
                these Terms of Us
              </p>
              <h6>Intellectual Property Rights</h6>
              <p>
                The Website and its entire contents, features, and functionality
                (including but not limited to all information, software, text,
                displays, images, video, and audio, and the design, selection,
                and arrangement thereof) are owned by the Company, its
                licensors, or other providers of such material and are protected
                by United States and international copyright, trademark, patent,
                trade secret, and other intellectual property or proprietary
                rights laws. These Terms of Use permit you to use the Website
                for your personal, non-commercial use only. You must not
                reproduce, distribute, modify, create derivative works of,
                publicly display, publicly perform, republish, download, store,
                or transmit any of the material on our Website, except as
                follows:
                <ul className="mt-4">
                  <li>
                    Your computer may temporarily store copies of such materials
                    in RAM incidental to your accessing and viewing those
                    materials.
                  </li>
                  <li>
                    You may store files that are automatically cached by your
                    Web browser for display enhancement purposes.
                  </li>
                  <li>
                    You may print or download one copy of a reasonable number of
                    pages of the Website for your own personal, non-commercial
                    use and not for further reproduction, publication, or
                    distribution.
                  </li>
                  <li>
                    If we provide desktop, mobile, or other applications for
                    download, you may download a single copy to your computer or
                    mobile device solely for your own personal, non- commercial
                    use, provided you agree to be bound by our end user license
                    agreement for such applications.
                  </li>
                  <li>
                    If we provide social media features with certain content,
                    you may take such actions as areenabled by such features.
                  </li>
                  You must not:
                  <li> Modify copies of any materials from this site.</li>
                  <li>
                    Use any illustrations, photographs, video or audio
                    sequences, or any graphics separately from the accompanying
                    text
                  </li>
                  <li>
                    Delete or alter any copyright, trademark, or other
                    proprietary rights notices from copies of materials from
                    this site.
                  </li>
                </ul>
                You must not access or use for any commercial purposes any part
                of the Website or any services or materials available through
                the Website. If you print, copy, modify, download, or otherwise
                use or provide any other person with access to any part of the
                Website in breach of the Terms of Use, your right to use the
                Website will stop immediately and you must, at our option,
                return or destroy any copies of the materials you have made. No
                right, title, or interest in or to the Website or any content on
                the Website is transferred to you, and all rights not expressly
                granted are reserved by the Company. Any use of the Website not
                expressly permitted by these Terms of Use is a breach of these
                Terms of Use and may violate copyright, trademark, and other
                laws.
              </p>
              <h6>Trademarks</h6>
              <p>
                The Company name, the Company logo, and all related names,
                logos, product and service names, designs, and slogans are
                trademarks of the Company or its affiliates or licensors. You
                must not use such marks without the prior written permission of
                the Company. All other names, logos, product and service names,
                designs, and slogans on this Website are the trademarks of their
                respective owners.
              </p>
              <h6>Prohibited Uses</h6>
              <p>
                You may use the Website only for lawful purposes and in
                accordance with these Terms of Use. You agree not to use the
                Website:
                <ul>
                  <li>
                    {" "}
                    In any way that violates any applicable federal, state,
                    local, or international law or regulation (including,
                    without limitation, any laws regarding the export of data or
                    software to and from the US or other countries).{" "}
                  </li>
                  <li>
                    For the purpose of exploiting, harming, or attempting to
                    exploit or harm minors in any way by exposing them to
                    inappropriate content, asking for personally identifiable
                    information, or otherwise.
                  </li>
                  <li>
                    To send, knowingly receive, upload, download, use, or re-use
                    any material that does not comply with the Content Standards
                    set out in these Terms of Use.{" "}
                  </li>
                  <li>
                    {" "}
                    To transmit, or procure the sending of, any advertising or
                    promotional material without our prior written consent,
                    including any "junk mail," "chain letter," "spam," or any
                    other similar solicitation.{" "}
                  </li>
                  <li>
                    To impersonate or attempt to impersonate the Company, a
                    Company employee, another user, or any other person or
                    entity (including, without limitation, by using email
                    addresses or screen names associated with any of the
                    foregoing).{" "}
                  </li>
                  <li>
                    To engage in any other conduct that restricts or inhibits
                    anyone's use or enjoyment of the Website, or which, as
                    determined by us, may harm the Company or users of the
                    Website, or expose them to liability.
                  </li>
                  Additionally, you agree not to:
                  <li>
                    Use the Website in any manner that could disable,
                    overburden, damage, or impair the site or interfere with any
                    other party's use of the Website, including their ability to
                    engage in real time activities through the Website.{" "}
                  </li>
                  <li>
                    {" "}
                    Use any robot, spider, or other automatic device, process,
                    or means to access the Website for any purpose, including
                    monitoring or copying any of the material on the Website.
                  </li>
                  <li>
                    {" "}
                    Use any manual process to monitor or copy any of the
                    material on the Website, or for any other purpose not
                    expressly authorized in these Terms of Use, without our
                    prior written consent.
                  </li>
                  <li>
                    Use any device, software, or routine that interferes with
                    the proper working of the Website. Introduce any viruses,
                    Trojan horses, worms, logic bombs, or other material that is
                    malicious or technologically harmful.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to, interfere with,
                    damage, or disrupt any parts of the Website, the server on
                    which the Website is stored, or any server, computer, or
                    database connected to the Website.
                  </li>
                  <li>
                    {" "}
                    Attack the Website via a denial-of-service attack or a
                    distributed denial-of-service attack. Otherwise attempt to
                    interfere with the proper working of the Website. ‍
                  </li>
                </ul>
              </p>
              <h6>User Contributions</h6>
              <p>
                The Website may contain message boards, chat rooms, personal web
                pages or profiles, forums, bulletin boards, and other
                interactive features (collectively, "Interactive Services") that
                allow users to post, submit, publish, display, or transmit to
                other users or other persons (hereinafter, "post") content or
                materials (collectively, "User Contributions") on or through the
                Website. All User Contributions must comply with the Content
                Standards set out in these Terms of Use. Any User Contribution
                you post to the site will be considered non-confidential and non
                proprietary. By providing any User Contribution on the Website,
                you grant us and our affiliates and service providers, and each
                of their and our respective licensees, successors, and assigns
                the right to use, reproduce, modify, perform, display,
                distribute, and otherwise disclose to third parties any such
                material for any purpose/according to your account settings.
                <ul>
                  You represent and warrant that:
                  <li>
                    You own or control all rights in and to the User
                    Contributions and have the right to grant the license
                    granted above to us and our affiliates and service
                    providers, and each of their and our respective licensees,
                    successors, and assigns.
                  </li>
                  <li>
                    All of your User Contributions do and will comply with these
                    Terms of Use.
                  </li>
                </ul>
                You understand and acknowledge that you are responsible for any
                User Contributions you submit or contribute, and you, not the
                Company, have full responsibility for such content, including
                its legality, reliability, accuracy, and appropriateness.
                <br /> We are not responsible or liable to any third party for
                the content or accuracy of any UserContributions posted by you
                or any other user of the Website.
              </p>
              <h6>Monitoring and Enforcement; Termination</h6>
              <p>
                We have the right to:
                <ul>
                  <li>
                    {" "}
                    Remove or refuse to post any User Contributions for any or
                    no reason in our sole discretion.{" "}
                  </li>
                  <li>
                    Take any action with respect to any User Contribution that
                    we deem necessary or appropriate in our sole discretion,
                    including if we believe that such User Contribution violate
                    the Terms of Use, including the Content Standards, infringes
                    any intellectual property right or other right of any person
                    or entity, threatens the personal safety of users of the
                    Website or the public, or could create liability for the
                    Company.
                  </li>
                  <li>
                    Disclose your identity or other information about you to any
                    third party who claims that material posted by you violates
                    their rights, including their intellectual property rights
                    or their right to privacy.
                  </li>
                  <li>
                    Take appropriate legal action, including without limitation,
                    referral to law enforcement, for any illegal or unauthorized
                    use of the Website.
                  </li>
                  <li>
                    Terminate or suspend your access to all or part of the
                    Website for any or no reason, including without limitation,
                    any violation of these Terms of Use.
                  </li>
                </ul>
                Without limiting the foregoing, we have the right to cooperate
                fully with any law enforcement authorities or court order
                requesting or directing us to disclose the identity or other
                information of anyone posting any materials on or through the
                Website. YOU WAIVE AND HOLD HARMLESS THE COMPANYAND ITS
                AFFILIATES, LICENSEES, AND SERVICE PROVIDERS FROM ANY CLAIMS
                RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING PARTIES
                DURING, OR TAKEN AS A CONSEQUENCE OF, INVESTIGATIONS BY EITHER
                THE COMPANY OR LAW ENFORCEMENT AUTHORITIES. However, we cannot
                review all material before it is posted on the Website and
                cannot ensure prompt removal of objectionable material after it
                has been posted. Accordingly, we assume no liability for any
                action or inaction regarding transmissions, communications, or
                content provided by any user or third party. We have no
                liability or responsibility to anyone for performance or
                nonperformance of the activities described in this section.
              </p>
              <h6>Content Standards</h6>
              <p>
                If you believe that any User Contributions violate your
                copyright, please email us at admin@palynx.com for instructions
                on sending us a notice of copyright infringement. It is the
                policy of the Company to terminate the user accounts of repeat
                infringers.
              </p>
              <h6>Reliance on Information Posted</h6>
              <p>
                The information presented on or through the Website is made
                available solely for general information purposes. We do not
                warrant the accuracy, completeness, or usefulness of this
                information. Any reliance you place on such information is
                strictly at your own risk. We disclaim all liability and
                responsibility arising from any reliance placed on such
                materials by you or any other visitor to the Website, or by
                anyone who may be informed of any of its contents. This Website
                may include content provided by third parties, including
                materials provided by other users, bloggers, and third-party
                licensors, syndicators, aggregators, and/or reporting services.
                All statements and/or opinions expressed in these materials, and
                all articles and responses to questions and other content, other
                than the content provided by the Company, are solely the
                opinions and the responsibility of the person or entity
                providing those materials. These materials do not necessarily
                reflect the opinion of the Company. We are not responsible, or
                liable to you or any third party, for the content or accuracy of
                any materials provided by any third parties.
              </p>
              <h6>Changes to the Website</h6>
              <p>
                We may update the content on this Website from time to time, but
                its content is not necessarily complete or up-to-date. Any of
                the material on the Website may be out of date at any given
                time, and we are under no obligation to update such material.
              </p>
              <h6>Information About You and Your Visits to the Website</h6>
              <p>
                All information we collect on this Website is subject to our
                Privacy Policy. By using the Website, you consent to all actions
                taken by us with respect to your information in compliance with
                the Privacy Policy.
              </p>
              <h6>Linking to the Website and Social Media Features</h6>
              <p>
                You may link to our homepage, provided you do so in a way that
                is fair and legal and does not damage our reputation or take
                advantage of it, but you must not establish a link in such a way
                as to suggest any form of association, approval, or endorsement
                on our part without our express written consent. This Website
                may provide certain social media features that enable you to:
                <ul>
                  <li>
                    {" "}
                    Link from your own or certain third-party websites to
                    certain content on this Website.
                  </li>
                  <li>
                    Send emails or other communications with certain content, or
                    links to certain content, on this Website.
                  </li>
                  <li>
                    Cause limited portions of content on this Website to be
                    displayed or appear to be displayed on your own or certain
                    third-party websites.
                  </li>
                  You may use these features solely as they are provided by us,
                  and solely with respect to the content they are displayed
                  with, and otherwise in accordance with any additional terms
                  and conditions we provide with respect to such features.
                  Subject to the foregoing, you must not:
                  <li>
                    {" "}
                    Establish a link from any website that is not owned by you.
                  </li>
                  <li>
                    {" "}
                    Cause the Website or portions of it to be displayed on, or
                    appear to be displayed by, any other site, for example,
                    framing, deep linking, or in-line linking.
                  </li>
                  <li>
                    {" "}
                    Link to any part of the Website other than the homepage.
                  </li>
                  <li>
                    {" "}
                    Otherwise take any action with respect to the materials on
                    this Website that is inconsistent with any other provision
                    of these Terms of Use.{" "}
                  </li>
                </ul>
                The website from which you are linking, or on which you make
                certain content accessible, must comply in all respects with the
                Content Standards set out in these Terms of Use. <br />
                You agree to cooperate with us in causing any unauthorized
                framing or linking immediately to stop.We reserve the right to
                withdraw linking permission without notice. <br />
                We may disable all or any social media features and any links at
                any time without notice in our discretion.
              </p>
              <h6>Links from the Website</h6>
              <p>
                If the Website contains links to other sites and resources
                provided by third parties, these links are provided for your
                convenience only. This includes links contained in
                advertisements, including banner advertisements and sponsored
                links. We have no control over the contents of those sites or
                resources and accept no responsibility for them or for any loss
                or damage that may arise from your use of them. If you decide to
                access any of the third-party websites linked to this Website,
                you do so entirely at your own risk and subject to the terms and
                conditions of use for such websites.
              </p>
              <h6>Geographic Restrictions</h6>
              <p>
                The owner of the Website is based in the State of New York in
                the United States. We provide this Website for use only by
                persons located in the United States. We make no claims that the
                Website or any of its content is accessible or appropriate
                outside of the United States. Access to the Website may not be
                legal by certain persons or in certain countries. If you access
                the Website from outside the United States, you do so on your
                own initiative and are responsible for compliance with local
                laws.
              </p>
              <h6>Disclaimer of Warranties</h6>
              <p className="disclamer">
                You understand that we cannot and do not guarantee or warrant
                that files available for downloadingfrom the internet or the
                Website will be free of viruses or other destructive code. You
                areresponsible for implementing sufficient procedures and
                checkpoints to satisfy your particularrequirements for
                anti-virus protection and accuracy of data input and output, and
                for maintaining ameans external to our site for any
                reconstruction of any lost data. TO THE FULLEST EXTENT PROVIDED
                BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A
                DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER
                TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR
                COMPUTEREQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY
                MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS
                OBTAINED THROUGH THE WEBSITE OR YOUR DOWNLOADING OF ANY MATERIAL
                POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT. YOUR USE OF THE
                WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH
                THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND
                ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED
                ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANYWARRANTIES OF
                ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY
                PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR
                REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
                RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THEWEBSITE.
                WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE
                ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE
                WEBSITE, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH
                THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR
                UNINTERRUPTED,THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR
                THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER
                HARMFUL COMPONENTS, OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS
                OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR
                EXPECTATIONS. TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY
                HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO
                ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS
                FOR PARTICULAR PURPOSE. THE FOREGOING DOES NOT AFFECT ANY
                WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE
                LAW.
              </p>
              <h6>Limitation on Liability</h6>
              <p>
                TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE
                COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS,
                EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES
                OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
                CONNECTION WITH YOURUSE, OR INABILITY TO USE, THE WEBSITE, ANY
                WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER
                WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
                TO, PERSONAL INJURY, PAIN AND SUFFERING,EMOTIONAL DISTRESS, LOSS
                OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED
                SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND
                WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF
                CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE. THE FOREGOING DOES
                NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED
                UNDER APPLICABLE LAW.
              </p>
              <h6>Indemnification</h6>
              <p>
                You agree to defend, indemnify, and hold harmless the Company,
                its affiliates, licensors, and service providers, and its and
                their respective officers, directors, employees, contractors,
                agents, licensors, suppliers, successors, and assigns from and
                against any claims, liabilities, damages, judgments, awards,
                losses, costs, expenses, or fees (including reasonable
                attorneys' fees) arising out of or relating to your violation of
                these Terms of Use or your use of the Website, including, but
                not limited to, your User Contributions, any use of the
                Website's content, services, and products other than as
                expressly authorized in these Terms of Use, or your use of any
                information obtained from the Website.
              </p>
              <h6>Governing Law and Jurisdiction</h6>
              <p>
                All matters relating to the Website and these Terms of Use, and
                any dispute or claim arising therefrom or related thereto (in
                each case, including non-contractual disputes or claims), shall
                be governed by and construed in accordance with the internal
                laws of the State of Delaware without giving effect to any
                choice or conflict of law provision or rule (whether of the
                State of Delaware or any other jurisdiction). Any legal suit,
                action, or proceeding arising out of, or related to, these Terms
                of Use or the Website shall be instituted exclusively in the
                federal courts of the United States or the courts of the State
                of Delaware, although we retain the right to bring any suit,
                action, or proceeding against you for breach of these Terms of
                Use in your country of residence or any other relevant country.
                You waive any and all objections to the exercise of jurisdiction
                over you by such courts and to venue in such courts.
              </p>
              <h6>Arbitration</h6>
              <p>
                At Company's sole discretion, it may require you to submit any
                disputes arising from these Terms of Use or use of the Website,
                including disputes arising from or concerning their
                interpretation, violation, invalidity, non-performance, or
                termination, to final and binding arbitration under the Rules of
                Arbitration of the American Arbitration Association applying
                Delaware law.
              </p>
              <h6>Limitation on Time to File Claims</h6>
              <p>
                ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR
                RELATING TO THESE TERMS OF USE OR THE WEBSITE MUST BE COMMENCED
                WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES;
                OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.
              </p>
              <h6>Waiver and Severability</h6>
              <p>
                No waiver by the Company of any term or condition set out in
                these Terms of Use shall be deemed a further or continuing
                waiver of such term or condition or a waiver of any other term
                or condition, and any failure of the Company to assert a right
                or provision under these Terms of Use shall not constitute a
                waiver of such right or provision. If any provision of these
                Terms of Use is held by a court or other tribunal of competent
                jurisdiction to be invalid, illegal, or unenforceable for any
                reason, such provision shall be eliminated or limited to the
                minimum extent such that the remaining provisions of the Terms
                of Use will continue in full force and effect.
              </p>
              <h6>Entire Agreement</h6>
              <p>
                The Terms of Use and our Privacy Policy constitute the sole and
                entire agreement between you and Palynx regarding the Website
                and supersede all prior and contemporaneous understandings,
                agreements, representations, and warranties, both written and
                oral, regarding the Website.
              </p>
              <h6>Your Comments and Concerns</h6>
              <p>
                This website is operated by Palynx. All notices of copyright
                infringement claims should be sent to{" "}
                <span>admin@palynx.com</span> in the manner and by the means set
                out therein. All other feedback, comments, requests for
                technical support, and other communications relating to the
                Website should be directed to: <span>admin@palynx.com</span>.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Container fluid className="footer">
          <Container>
            <div class="row">
              <div class=" col-sm-3 footerP">
                <img
                  src="./palynxwlogo.png"
                  alt="logo"
                  className="logo-img b-ff"
                />
                <p className="">Discover, Connect, Plan</p>
                <div className="d-flex footerp-iconMobile">
                  <Link
                    to="https://www.linkedin.com/company/palynxapp/"
                    className="Linked-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-icon2">
                      <BiLogoLinkedin />
                    </button>
                  </Link>

                  <Link
                    to="https://www.instagram.com/palynxapp?igsh=cTd0Zmp5eG42NGgw"
                    className="Linked-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-icon2">
                      <BsInstagram />
                    </button>
                  </Link>

                  <Link
                    to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                    className="Linked-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-icon2">
                      <FaFacebookF />
                    </button>
                  </Link>

                  <Link
                    to="https://x.com/palynxapp"
                    className="Linked-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-icon2">
                      <FaXTwitter />
                    </button>
                  </Link>
                </div>
              </div>
              <div class="col-sm-3 footerp">
                {/* <p>
                  <Link
                    to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                    className="footer-links"
                  >
                    <a>
                      About us
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p> */}
                <p>
                  <Link to="/Blog" className="footer-links">
                    <a>
                      Blog
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
                <p>
                  <Link to="/Faqs" className="footer-links">
                    <a>
                      Faqs
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
                <p>
                  <Link to="/Contact" className="footer-links">
                    <a>
                      Contact
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
              </div>
              <div class="col-sm-3 footerp">
                <p>
                  <Link to="/Terms" className="footer-links">
                    <a>
                      Terms of Service
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
                <p>
                  <Link to="/Privacy" className="footer-links">
                    <a>
                      Privacy & Policy
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
              </div>
              <div class="col-sm-3 footerp">
                <p>
                  <a href="#">Download App</a>
                </p>
                <Link
                  to="https://apps.apple.com/us/app/palynx/id6480189332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-btn"
                >
                  <button className="download-button">
                    <i className="bi bi-apple"></i>
                    <div className="text-container ">
                      Download on the <br /> <span>App Store</span>
                    </div>
                  </button>
                </Link>

                <div className="PalynxT"></div>
              </div>
            </div>
            <div className="d-flex justify-content-center foter">
              <h6>All rights reserved Palynx © 2024</h6>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
};
export default Terms;
