import { Button } from "@mui/material";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Card from "../components/Card";
import FrameComponent4 from "../components/FrameComponent4";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "./Homepage.css";

const Homepage = () => {
  return (
  <>
    <div className="homepage-1921">
      <div className="button-wrapper">
        <div className="button">
          <img className="tag-icon" alt="" src="/tag-icon.svg"/>
          <div className="button1">Buy</div>
          <img className="tag-icon1" alt="" src="/tag-icon.svg"/>
        </div>
      </div>
      <FrameComponent6/>
      <FrameComponent5/>
      <section className="card-container">
        <div className="nested-card-container">
          <div className="double-nested-card-container">
            <div className="triple-nested-card-container">
              <div className="quadruple-nested-card-containe">
                <div className="choose-a-card-parent">
                  <h1 className="choose-a-card">Choose a card </h1>
                  <div className="for-sending-by-post-or-email-wrapper">
                    <div className="for-sending-by">
                      For sending by post or email
                    </div>
                  </div>
                </div>
              </div>
              <div className="ultimate-card-container">
                <div className="nested-ultimate-card-container">
                  <div className="double-nested-ultimate-card-co">
                    <img
                        className="link-ultimate-1webp"
                        loading="lazy"
                        alt=""
                        src="/link--ultimate1webp@2x.png"
                    />
                    <div className="heading-3-ultimate-parent">
                      <h1 className="heading-3">Ultimate</h1>
                      <div className="of-the-biggest-and-best-loved-wrapper">
                        <div className="of-the-biggest-container">
                          <p className="of-the-biggest">
                            250+ of the biggest and best loved UK brands across
                            food, home, fashion and
                          </p>
                          <p className="entertainment">{`entertainment. `}</p>
                          <p className="blank-line">&nbsp;</p>
                          <p className="we-offer-the">{`We offer the widest range of retailers and brands compared to any other UK gift card including:  M&S, TK Maxx, Selfridges & Co, boohoo, ASOS, Theatre Tokens, Xbox, Odeon, Boots, Wagamama, Greggs, Nandos, Starbucks, and everything in between!  `}</p>
                          <p className="blank-line1">&nbsp;</p>
                          <p className="ith-the-lifestyle">
                            ith the Lifestyle Ultimate Gift Card, everyone is
                            guaranteed to find somewhere they love to shop –
                            it really is the perfect gift.
                          </p>
                        </div>
                      </div>
                      <div className="view-the-250-brands-parent">
                        <div className="view-the-250">View the 250 brands</div>
                        <Button
                            className="button2"
                            disableElevation
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              color: "#fff",
                              fontSize: "16",
                              background: "#f13544",
                              borderRadius: "4px",
                              "&:hover": {background: "#f13544"},
                              width: 142,
                              height: 40,
                            }}
                        >
                          Buy
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-grid">
                  <div className="card">
                    <div className="card-1-1">
                      <img
                          className="card-1-1-child"
                          alt=""
                          src="/rectangle-1@2x.png"
                      />
                      <img
                          className="card-1-1-item"
                          loading="lazy"
                          alt=""
                          src="/rectangle-3@2x.png"
                      />
                    </div>
                    <div className="card-inner">
                      <div className="frame-parent">
                        <div className="heading-3-thank-you-parent">
                          <h1 className="heading-31">Nike</h1>
                          <div className="unleash-your-potential">
                            Unleash your potential with every stride: Nike,
                            where sport meets style.
                          </div>
                        </div>
                        <div className="view-all-nike-cards-parent">
                          <div className="view-all-nike">
                            View all Nike Cards
                          </div>
                          <Button
                              className="button3"
                              disableElevation
                              variant="contained"
                              sx={{
                                textTransform: "none",
                                color: "#fff",
                                fontSize: "16",
                                background: "#f13544",
                                borderRadius: "4px",
                                "&:hover": {background: "#f13544"},
                                width: 80,
                                height: 40,
                              }}
                          >
                            Buy
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Card
                      rectangle1="/rectangle-1-1@2x.png"
                      rectangle3="/rectangle-3-1@2x.png"
                      heading3ThankYou="Apple"
                      unlockEndlessPossibilitie="Unlock endless possibilities with an Apple gift card: Innovation in every byte"
                      viewAllAppleCards="View all Apple Cards"
                  />
                  <Card
                      rectangle1="/rectangle-1-2@2x.png"
                      rectangle3="/rectangle-3-2@2x.png"
                      heading3ThankYou="McDonalds"
                      unlockEndlessPossibilitie={`Savor joy with every bite: McDonald's, where happiness is served."`}
                      viewAllAppleCards="View all McDonalds Cards"
                      propLeft="864px"
                      propTop="0px"
                      propDisplay="unset"
                      propMinWidth="unset"
                  />
                  <Card
                      rectangle1="/rectangle-1-3@2x.png"
                      rectangle3="/rectangle-3-3@2x.png"
                      heading3ThankYou="Amazon"
                      unlockEndlessPossibilitie="From A to Z, explore it all with an Amazon gift card: Your world, one click away."
                      viewAllAppleCards="View all Amazon Cards"
                      propLeft="0px"
                      propTop="450px"
                      propDisplay="unset"
                      propMinWidth="unset"
                  />
                  <Card
                      rectangle1="/rectangle-1-4@2x.png"
                      rectangle3="/rectangle-3-4@2x.png"
                      heading3ThankYou="Coca-Cola"
                      unlockEndlessPossibilitie="Pop open happiness with a Coca-Cola gift card: Refreshing moments in every sip."
                      viewAllAppleCards="View all Coca-Cola Cards"
                      propLeft="432px"
                      propTop="450px"
                      propDisplay="unset"
                      propMinWidth="unset"
                  />
                  <Card
                      rectangle1="/rectangle-1-5@2x.png"
                      rectangle3="/rectangle-3-5@2x.png"
                      heading3ThankYou="Adidas"
                      unlockEndlessPossibilitie="Step up your game with an adidas gift card: Elevate your performance, style, and confidence."
                      viewAllAppleCards="View all Adidas Cards"
                      propLeft="864px"
                      propTop="450px"
                      propDisplay="inline-block"
                      propMinWidth="110px"
                  />
                  <Card
                      rectangle1="/rectangle-1-6@2x.png"
                      rectangle3="/rectangle-3-6@2x.png"
                      heading3ThankYou="Starbucks"
                      unlockEndlessPossibilitie="Sip joy with a Starbucks gift card: Where every cup is a moment of warmth and delight."
                      viewAllAppleCards="View all Starbucks Cards"
                      propLeft="0px"
                      propTop="900px"
                      propDisplay="unset"
                      propMinWidth="unset"
                  />
                  <Card
                      rectangle1="/rectangle-1-7@2x.png"
                      rectangle3="/rectangle-3-7@2x.png"
                      heading3ThankYou="Samsung"
                      unlockEndlessPossibilitie="Stay connected with innovation: Samsung, where technology meets possibility"
                      viewAllAppleCards="View all Samsung Cards"
                      propLeft="432px"
                      propTop="900px"
                      propDisplay="unset"
                      propMinWidth="unset"
                  />
                </div>
              </div>
              <div className="benifits-wrapper">
                <div className="benifits">
                  <h3 className="benefits">Benefits</h3>
                  <div className="frame-group">
                    <div className="image-ng-lazyloaded-parent">
                      <img
                          className="image-ng-lazyloaded-icon"
                          loading="lazy"
                          alt=""
                          src="/image-nglazyloaded@2x.png"
                      />
                      <div className="send-by-post">Send by post or email</div>
                      <div className="hour-delivery">24 hour delivery</div>
                    </div>
                    <div className="image-ng-lazyloaded-group">
                      <img
                          className="image-ng-lazyloaded-icon1"
                          alt=""
                          src="/image-nglazyloaded-1@2x.png"
                      />
                      <div className="personalise-it">Personalise it!</div>
                      <div className="add-images-and">
                        Add images and photos
                      </div>
                    </div>
                    <div className="sustainable-benefit">
                      <img
                          className="image-ng-lazyloaded-icon2"
                          alt=""
                          src="/image-nglazyloaded-2@2x.png"
                      />
                      <div className="sustainable">Sustainable</div>
                      <div className="carbon-neutral-and">
                        Carbon neutral and environmentally friendly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent4/>
        </div>
      </section>
      <Newsletter/>
      <Footer/>
    </div>

  </>
)
  ;
};

export default Homepage;
