const Footer = () => {
    return (
        <div className="footer">
            <div className="input-wrapper">
                <input placeholder="Email" />
                <button onClick={() => window.location.href = "https://www.youtube.com/@locusstream"}>SUBSCRIBE</button>
            </div>
            <div className="copyright">
                <p>&copy; 2023, NOSENSE</p>
            </div>
        </div>
    )
}

export default Footer