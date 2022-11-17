import React from 'react'
import { Alert, Col, Container, Form, Row, Spinner, Table } from "react-bootstrap"
import useFiles from "./controllers"
import './styles.css'

const Files = () => {

  const {
    files,
    fileLists,
    status,
    error,
    onCloseErrorAlert,
    handleFilesSelect
  } = useFiles()

  return (
    <Container fluid>
      <Row className="files-title-container">
        <Col>
          <span className='files-title'>
            React Test App
          </span>
        </Col>
      </Row>
      {status.getAll === 'loading' && (
        <Row className='files-loading'>
          <Spinner animation="border" />
        </Row>
      )}

      {status.getAll === 'error' && (
        <Alert
          variant="danger"
          onClose={onCloseErrorAlert}
          dismissible
          className='files-alert'
        >
          <Alert.Heading>{error.getAll}</Alert.Heading>
        </Alert>
      )}
      <Row className='files-content'>
        <Col xs={12} sm={6} lg={3}>
          <Form.Select
            onChange={handleFilesSelect}
            style={{ width: `100 px` }}
            defaultValue='DEFAULT'
          >
            <option value="DEFAULT"> -- Selecione -- </option>
            {fileLists.map((fileName, i) => (
              <option key={i} value={fileName}>{fileName}</option>
            ))}
          </Form.Select>
        </Col>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            {files?.map(({ file, lines }, i) => {
              if (lines?.length > 0)
                return (
                  lines.map(({ text, number, hex }, j) => (
                    <tr key={`${i}.${j}`}>
                      <td>{file}</td>
                      <td>{text}</td>
                      <td>{number}</td>
                      <td>{hex}</td>
                    </tr>
                  ))
                )

              return <div>Sin archivos</div>
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Files