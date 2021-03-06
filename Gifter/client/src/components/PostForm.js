import React, { useState, useContext } from "react";
import {
    Form,
    FormGroup,
    Card,
    CardBody,
    Label,
    Input,
    Button,
} from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { useHistory } from "react-router-dom";

const PostForm = () => {

    //use context hook, opening Provider box and using that one method
    const { addPost } = useContext(PostContext);
    const [userProfileId, setUserProfileId] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [dateCreated, setDateCreated] = useState("");

    // Use this hook to allow us to programatically redirect users
    // send the user back to the main feed
    const history = useHistory();

    const submit = (e) => {
        const post = {
            imageUrl,
            title,
            caption,
            userProfileId: +userProfileId,
            dateCreated
        };

        addPost(post).then((p) => {
            // Navigate the user back to the home route once they save the post
            history.push("/");
        });
    };

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>

                        <Form>

                            <FormGroup>
                                <Label for="userId">User Id (For Now...)</Label>
                                <Input
                                    id="userId"
                                    onChange={(e) => setUserProfileId(e.target.value)}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="imageUrl">Gif URL</Label>
                                <Input
                                    id="imageUrl"
                                    onChange={(e) => setImageUrl(e.target.value)}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input id="title" onChange={(e) => setTitle(e.target.value)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="caption">Caption</Label>
                                <Input
                                    id="caption"
                                    onChange={(e) => setCaption(e.target.value)}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="dateCreated">Date</Label>
                                <Input
                                    id="dateCreated"
                                    type="datetime-local"
                                    onChange={(e) => setDateCreated(e.target.value)}
                                />
                            </FormGroup>

                        </Form>

                        <Button color="info" onClick={submit}>
                            SUBMIT
            </Button>

                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default PostForm;