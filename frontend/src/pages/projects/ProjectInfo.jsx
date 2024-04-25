import { useParams } from 'react-router-dom';

export default function ProjectInfo() {

    const params = useParams();
    const id = params?.id || "none"
    return (
        <h1>Are we here yet? {id} </h1>
    )
}