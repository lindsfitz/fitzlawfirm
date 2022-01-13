import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Estate() {

    let navigate = useNavigate();

    return (
        <div style={{ margin: '5% 10% 5% 10%' }}>
            <h1 style={{ textAlign: 'center' }}>Learn More About Estate Planning</h1>
            <div id='estate-container'>
                <div id='estate-navigation'>
                    <h2>Information:</h2>
                    <div id='estate-link-box'>
                        <div>
                            <h3><a href='#overview'>Overview</a></h3>
                            <br />
                            <h3><a href='#wills'>Wills</a></h3>
                        </div>
                        <br />
                        <div>
                            <h3><a href='#trusts'>Trusts</a></h3>
                            <br />
                            <h3><a href='#get-started'>Get Started</a></h3>
                        </div>
                        <br />
                    </div>

                </div>
                <div id='estate-content-container'>
                    <div className='estate-content' id='overview'>
                        <h2>What is Estate Planning?</h2>
                        <p>Technically, an estate is everything that contributes to the net worth of an individual, and includes both physical belongings as well as intangible assets. An individual's estate can be composed of assets such as real estate, investments, cash, collectibles, or furnishings. Estate planning refers to the management of how these assets will be transferred to beneficiaries when an individual passes away.</p>
                        <p>More simply, your estate is everything that you have acquired in your lifetime. These are the things you have worked hard to build into something significant for yourself and those that are important to you. </p>
                        <p>The management of your estate simply means that these assets are used for what is important for you. You decide during your lifetime what will happen to your assets when either you no longer have the capacity to make these decisions or you have passed away. You may decide that these assets should be used for your benefit, for your spouse, or for your children. You may even decide to put restrictions on any of these. That is absolutely acceptable; these are your assets and you make those decisions.</p>
                        <p>What if I don’t want to make those decisions now or think they are too hard? That’s okay; the State of California has an estate plan already, called Intestacy, and decisions about your care or of the disposition of your assets can be made by the court system. It’s truly up to you.  </p>
                        <p>We are here to offer advice, but ultimately it is our goal for our clients to make these decisions!</p>
                        <br />
                        <div>
                            <h3>Why is Estate Planning So Important?</h3>
                            <p>Estate planning guarantees that your legacy and dignity is protected to the extent of your preference, and extends protection to your loved ones upon your passing. Having your estate in order in advance offers comfort in knowing that those you care for will be taken care of in the event that something may happen to you. </p>
                        </div>
                        <br />
                    </div>
                    <div className='estate-content' id='wills'>
                        <h2>What are the Benefits of Having a Will?</h2>
                        <p>A will is a legal document that becomes operational upon death. This document states how an individual prefers to have affairs handled and assets distributed, and can include other personal details, such as how the funeral or memorial should be held. For parents of minor children, a will is essential as it can be used for appointing guardianship of children.</p>
                        <p>You can adjust your will as many times as you desire throughout your lifetime and upon your passing, it is your last will that will go into effect. Without a will, the state court oversees distribution of assets, which could result in actions that negatively impact surviving loved ones or do not align with your wishes.</p>
                        <p>Additionally, a well-written will makes it easier and faster for your designated heirs to gain access to your assets and can significantly reduce the strain of estate taxes.</p>
                        <div>
                            <h3>Why Involve an Attorney?</h3>
                            <p>Generally, to maximize the likelihood that your wishes will be carried out, lawyers will recommend creating a testamentary will. This is the most common and familiar type of will; the document is prepared and then signed in the presence of witnesses.
                                While you can draft this document yourself, having your estate prepared by a professional estate attorney ensures it will be worded precisely, correctly, and in-line with current state laws.
                            </p>

                            <p>This is arguably the best insurance against successful challenges to your wishes by family members or business associates after your passing. </p>

                        </div>
                    </div>
                    <div className='estate-content' id='trusts'>
                        <h2>What is a Trust?</h2>
                        <p>A trust becomes operational immediately upon creation, even while the individual is still alive.</p>
                        <p>There are many variations of trusts, varying in complexity and serving a multitude of legal, personal, investment, and tax purposes. There are always at least three entities involved in a trust: the creator, the trustee, and the beneficiary. The designated individual, or trustee, holds the responsibility of managing the trust’s assets until it is transferred to the beneficiary. The most commonly used trusts today include an irrevocable trust, often created for tax purposes, which cannot be altered after their creation, and living trusts, which can be changed by the creator. </p>
                        <div>
                            <h3>Wills vs. Trusts - How Do I Choose?</h3>
                            <p>There can be many advantages to establishing a trust. For example, a revocable living trust allows for quicker transfer of assets, as you are able to bypass the legal process of probate. All wills are required to go through probate court, which can be a time-consuming and stressful process, especially if family members contest the will.</p>
                            <p>Trusts cannot be contested, however they can be a bit more tedious to set up and must be actively managed. It is possible for an individual to have both a will and a trust.</p>
                            <p>Our team is here to assist in making difficult decisions and offer advice on what plan may best fit your personal needs.</p>

                        </div>
                    </div>
                    <div className='estate-content' id='get-started'>
                        <h2>Start Preparing Today!</h2>
                        <p>Unfortunately, life is unpredictable and not all events can be adequately prepared for. That is why we recommend getting your affairs in order for your Estate earlier rather than later.</p>
                        <p>It may not be fun to think about who will inherit your assets once you are gone, but without a plan, you may not have a say in what happens to everything you have worked so hard for during your lifetime.</p>
                        <p>Estate planning isn't only for the wealthy. Creating a plan removes the emotional and financial burden settling your affairs may have on your loved ones, regardless of the size of your estate. Reducing taxes on what you’ve left behind and minimizing the chances of family strife or other legal battles is beneficial for everyone. </p>
                        <p>To summarize, if you want your assets and your loved ones protected when you can no longer do so, you will need an estate plan. Without one, your heirs could face big tax burdens and the courts could designate how your assets are divided — and even who gets to raise your children.</p>
                        <p>Our team is here to assist and provide peace of mind for our clients, who can be sure there is a plan in place that satisfies their wants and needs in the face of any outcome.  </p>
                        <p>Reach out to an advisor today to get started!</p>

                        <button type="button" className="contact-btn" onClick={() => navigate('/contact')}>
                            CONTACT US
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}