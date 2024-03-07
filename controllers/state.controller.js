let states = [
  {
    id: 1,
    name: 'Abia',
  },
  { id: 2, name: 'Umia' },
  { id: 3, name: 'Adamawa' },
  { id: 4, name: 'Yola' },
  { id: 5, name: 'AkwaIbom' },
  { id: 6, name: 'Uyo' },
]

export async function getstatesHandler(req, res) {
  res.status(200).json(states)
}

export async function addStateHandler(req, res) {
  if (states.find((state) => state.id === req.body.id)) {
    res.status(409).json('State id must be unique')
  }
  else {
    states.push(req.body)
    res.status(200).json(states)
  }
}

export async function deleteStateHandler(req, res) {
  const index = states.findIndex((state) => state.id == req.params.id)
  if (index >= 0) {
    states.splice(index, 1)
    res.status(200).json(states)
  } else res.status(400).send()
}

export async function editStateHandler(req, res) {
  const index = states.findIndex((state) => state.id == req.body.id)
  if (index >= 0) {
    states.splice(index, 1, req.body)
    res.status(200).json(states)
  } else res.status(400).send()
}