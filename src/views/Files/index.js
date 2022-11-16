import { Alert, Col, Container, Form, Row, Spinner, Table } from "react-bootstrap"
import useFiles from "./controllers"

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
      <Row style={{ backgroundColor: '#f1706a', padding: '10px 0px' }}>
        <Col>
          <span style={{ color: '#FFF', fontWeight: 'bold' }}>
            React Test App
          </span>
        </Col>
      </Row>
      {status.getAll === 'loading' && (
        <Row style={{ justifyContent: 'center', margin: '10px 0' }}>
          <Spinner animation="border" />
        </Row>
      )}

      {status.getAll === 'error' && (
        <Alert
          variant="danger"
          onClose={onCloseErrorAlert}
          dismissible
          style={{ justifyContent: 'center', margin: '10px 0' }}
        >
          <Alert.Heading>{error.getAll}</Alert.Heading>
        </Alert>
      )}
      <Row style={{ padding: '10px 20px' }}>
        <Col xs={12} sm={6} lg={3}>
          <Form.Select
            onChange={handleFilesSelect}
            style={{ width: `100 px` }}
            styles={{ control: { height: 20, minHeight: 20 } }}
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
            {files?.map(({ file, lines }, i) => (
              lines.map(({ text, number, hex }, j) => (
                <tr key={`${i}.${j}`}>
                  <td>{file}</td>
                  <td>{text}</td>
                  <td>{number}</td>
                  <td>{hex}</td>
                </tr>
              ))
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Files