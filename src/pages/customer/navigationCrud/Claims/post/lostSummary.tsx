/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Message, Person, Send } from "@material-ui/icons"
import { Avatar, Box, Card, IconButton, InputAdornment, TextField, Tooltip } from "@mui/material"
import { useFindLostPerson } from "../../../../../controller/lost/query"
import { ReactNode, useEffect, useState } from "react";
import { CommentInput } from "../../../../../typedefs/CommentInput";
import { useSaveComment } from "../../../../../controller/comment/mutation";

export const LostSummary = (props: { customerId: string, children: ReactNode }) => {
  const customerDetail = JSON.parse(String(localStorage.getItem('user')));
  const { response, refetch } = useFindLostPerson(props.customerId);
  const [comment, setComment] = useState<CommentInput>({ comment: '', customerId: customerDetail.id, lostId: '' });
  const { saveHandler } = useSaveComment(comment);
  useEffect(
    () => {
      if (response.responseReady&&response.responseContent!=undefined) {
        setComment({ ...comment, lostId: response.responseContent.id })
      }
    }
  )
  const saveCommentHandler = () => {
    if (comment.comment.length == 0) alert('please add comment before sending a message')
    else {
      saveHandler().then(data => { alert(data.data.saveComment); refetch() }).catch(err => alert(err));
    }
  }
  return <>
    {props.children}
    {response.responseReady && response.responseContent != undefined &&
      <Box sx={{ p: 1 }}>
        <main className="row col-12">
          <section className="col-md-3 card rounded-0 border-0">
            <img src={response.responseContent.profile} alt="" />
          </section>
          <section className="col-md-9 card d-flex justify-content-center rounded-0 align-content-center border-0">
            <section>
              <Box sx={{ mb: 2 }}><Person /> {response.responseContent.name}</Box>
              <Box sx={{ mb: 2 }}><Person /> {response.responseContent.gender}</Box>
              <Box sx={{ mb: 2 }}><b>Native Country </b> {response.responseContent.nativeCountry}</Box>
              <Box sx={{ mb: 2 }}><b>Current Country </b> {response.responseContent.currentCountry}</Box>
              <Box sx={{ mb: 2 }}><b>Date of birth </b> {response.responseContent.dob}</Box>
              <Box sx={{ mb: 2 }}><b>Expected lost address </b> {response.responseContent.expectedAddress}</Box>
              <Box sx={{ mb: 2 }}><b>Relationship </b> {response.responseContent.relationShip}</Box>
              <Box sx={{ mb: 2 }}><b>Status </b> {response.responseContent.hasFound ? <span className="fw-bold fw-bold text-success">Found</span> : <span className="text-danger fw-bold">Not Found</span>}</Box>
              <Box sx={{ mb: 2 }}><b>Case </b> {response.responseContent.cases.title}</Box>
              <Box sx={{ mb: 2 }}>{response.responseContent.cases.description}</Box>
            </section>
          </section>
        </main>
        <Box>
          <section className="text-center mt-3 mb-3">
            <b className="border-0 border-bottom border-primary border-2">All comments</b>
          </section>
        </Box>
        <Box>
          {response.responseContent.lostComments.length == 0 && <div className="p-5 bg-body-tertiary text-center mt-3">
            No comment found
          </div>}
          {response.responseContent.lostComments.length != 0 && response.responseContent.lostComments.map((data: any) => <Card className="d-flex col-sm-8 m-auto border mb-2">
            <Tooltip arrow title={<img className="card-img" src={data.customer.profilePicture} />}>
              <Avatar src={data.customer.profilePicture} />
            </Tooltip><div className="card border-0">
              <b>{data.customer.firstName} {data.customer.lastName}</b><br />
              <div className="mx-1"><Message />{data.comment}</div>
            </div>
          </Card>)
          }
        </Box>
        <Box sx={{ p: 3 }}>
          <TextField className="sticky-bottom" value={comment.comment} onChange={(e) => setComment({ ...comment, comment: e.target.value })} placeholder='Enter message ..' fullWidth InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => saveCommentHandler()}
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <Send />
                </IconButton>
              </InputAdornment>
            ),
          }} />
        </Box>
      </Box>}
  </>
}