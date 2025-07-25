function LoadingScreen({loading, updateCards}) {
  console.log("loading")

  if (loading) {
    updateCards()
  }
    return <div>
      <h1>Loading...</h1>
    </div>
}

export default LoadingScreen