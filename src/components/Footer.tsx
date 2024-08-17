import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "store/reducer";
import "stylesheets/Footer.scss";

export default function Footer() {
    const { timerId } = useSelector((state: State) => state.time);
    const [showList, setShowList] = useState<boolean>(false);

    return (
        <div className={`bottom-area ${timerId ? "hidden" : ""}`}>
            <span className="hint">
                <kbd>Ctrl</kbd> + <kbd>k</kbd> to open command palette
            </span>
            <span className="hint">
                <kbd>Tab</kbd> to restart test
            </span>
            <footer>

                <span>
                    Owned by{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.sagarb.com"
                    >
                        Sagar Bhusal
                    </a>
                </span>
                <div className="donate-button">
                    <a
                        href="https://www.paypal.com/donate/?hosted_button_id=5FN24P6YUPH2W"
                        className="donate-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Share your</span>
                        <svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span>Donate</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-paypal paypal-logo" viewBox="0 0 16 16">
                            <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z"/>
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
    );
}
