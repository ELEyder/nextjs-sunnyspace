import Link from 'next/link'
import Image from 'next/image'
import './page.css'

export default function Chat() {
    return (
        <main>
            <div className="overlay" id="overlay">
                <div className="modal">
                    <div className="modal-header">
                        <h1>Your Friends</h1>
                        <a id="closeOverlay">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" strokeLinecap="round" />
                                <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" strokeLinecap="round" />
                            </svg>
                        </a>
                    </div>
                    <div id="addChat" className="friend-chat" >
                        <div className="avatar-icon">
                            <Image src="/img/favicon.jpg" alt="avatar" className="avatar-icon" />
                        </div>
                        <h2> friend.firstName  friend.lastName </h2>
                    </div>
                </div>
            </div>
            <section className="chats">
                <div className="chats-header">
                    <h1>Chats</h1>
                    <a id="showOverlay">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 18V6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <Link href="/">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00002 15.3802H13.92C15.62 15.3802 17 14.0002 17 12.3002C17 10.6002 15.62 9.22021 13.92 9.22021H7.15002" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.57 10.7701L7 9.19012L8.57 7.62012" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
                <div id="chats-body">

                </div>
            </section>
            <section className="chat" id="chat">
                <div className="info" id="info">
                    <h1 className="info">Aquí se mostraran tus chats</h1>
                </div>
                <div className="chat-header" id="chat-header">

                </div>
                <div className="chat-details" id="chat-details">

                </div>
                <div className="input-chat" id="input-chat">
                    <input type="text" id="message-input" placeholder="Escribe tu mensaje aquí" />
                    <label htmlFor="input-media" className="file-media">Select photo, gif or video</label>
                    <input type="file" name="file-media" className="file-media" id="input-media" accept=".jpg, .gif, .mp4" />
                    <button id="send" type="submit" className="btn-comment">
                        <svg className="send" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                </div>
            </section>
        </main>
    )
} 