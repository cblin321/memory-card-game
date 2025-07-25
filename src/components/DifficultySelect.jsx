function DifficultySelect({handleDiffSelect}) {
    return <div className="diff-modal">
        <h1>Choose Your Difficulty:</h1>
        <div className="diff-options">
            <button className="diff-option" onClick={(e) => handleDiffSelect(e.target.textContent)}>Easy</button>
            <button className="diff-option" onClick={(e) => handleDiffSelect(e.target.textContent)}>Medium</button>
            <button className="diff-option" onClick={(e) => handleDiffSelect(e.target.textContent)}>Hard</button>
        </div>
    </div>
}

export default DifficultySelect