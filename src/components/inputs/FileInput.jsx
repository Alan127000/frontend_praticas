export const FileInput = (props) => {
    return (
        <div className="file has-name" style={{marginTop: 10}}>
            <label className="file-label">
                <input className="file-input" type="file" name="resume" onChange={(e) => props.onChange(e.target.files[0])} />
                <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        {props.text}
                    </span>
                </span>
                <span className="file-name">
                    {props.fileName}
                </span>
            </label>
        </div>
    )
}