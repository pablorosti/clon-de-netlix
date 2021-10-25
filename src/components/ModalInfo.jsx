import React, { useContext } from 'react'
import { Button, Modal, Image, Rating } from 'semantic-ui-react'
import { DataContext } from '../context/DataContext';
import { useGetMovieId } from '../hooks/useGetMovieId';

import ReactPlayer from 'react-player'

export const ModalInfo = () => {

  const { data, openModal, setOpenModal } = useContext(DataContext);

  //Obtenemos el key para buscar el video en youtube
  const [movie] = useGetMovieId(data.id)

  //Filtramos del array movie los que sean del tipo trailer
  const trailers = movie.filter(p => p.type === "Trailer")

  return (
    <Modal open={openModal} dimmer={'blurring'} onClose={() => setOpenModal(false)} size="small">
      <Modal.Header>{data.title}</Modal.Header>
      <Modal.Content image>
        <Image>
          <iframe min-width="100vw" height="500" src={`https://www.youtube.com/embed/${trailers[0]?.key}?modestbranding=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Image>

        <Modal.Description className="bg-white">
          <h4 className="bg-white">{data.overview}</h4>
          <h4 className="bg-white">Language: {data.language}</h4>
          <h4 className="bg-white">Date: {data.date}</h4>
          <h4 className="bg-white">Score: {data.vote}</h4>

          <Rating className="bg-white" icon='star' defaultRating={data.vote} maxRating={9} />

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpenModal(false)}>Salir</Button>
      </Modal.Actions>
    </Modal>
  )
}
