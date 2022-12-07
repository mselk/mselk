import { useRouter } from "next/router"
import Tile from "../../components/tile/tile"
import tiles from "../../data/tiles"

const Post = () => {
    const router = useRouter()
    const { id } = router.query
    const tile = tiles.find(tile => tile.link === id)
    if (!tile) { return 'not found' }
    return <div>
        <Tile link={tile.link} details={tile.details} headline={tile.headline} image={tile.image} />
        {tile.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>
}

export default Post

