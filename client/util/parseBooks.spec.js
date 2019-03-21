const {expect} = require('chai'),
  parseBooks = require('./parseBooks'),
  faker = require('faker')

describe('parseBooks', () => {
  let example1, example2, solution1, solution2
  before(() => {
    solution1 = []
    solution2 = []
    for (let i = 0; i < 10; i++) {
      // solutions
      solution1.push({
        id: faker.random.alphaNumeric(),
        authors: [faker.name.findName()],
        pageCount: faker.random.number(),
        publishedDate: faker.date.past(),
        description: faker.lorem.paragraph(),
        thumbnail: faker.image.imageUrl()
      })
      const solution2temp = {
        id: faker.random.alphaNumeric(),
        authors: [faker.name.findName()],
        pageCount: faker.random.number(),
        publishedDate: faker.date.past(),
        description: faker.lorem.paragraph()
      }
      if (i % 2 === 0) solution2temp.thumbnail = faker.image.imageUrl()
      solution2.push(solution2temp)
    }
    // examples
    example1 = solution1.map(
      ({id, authors, pageCount, publishedDate, description, thumbnail}) => ({
        id,
        volumeInfo: {
          authors,
          pageCount,
          description,
          publishedDate,
          imageLinks: {thumbnail}
        }
      })
    )
    example2 = solution2.map(obj => {
      const returnObj = {
        id: obj.id,
        volumeInfo: {
          authors: obj.authors,
          pageCount: obj.pageCount,
          description: obj.description,
          publishedDate: obj.publishedDate
        }
      }
      if (obj.hasOwnProperty('thumbnail')) {
        returnObj.volumeInfo.imageLinks = {thumbnail: obj.thumbnail}
      }
      return returnObj
    })
  })
  it('takes an array of books and returns another array of books', () => {
    expect(parseBooks([])).to.be.an('array')
  })
  it('returns an array of the same length', () => {
    expect(parseBooks(example1).length).to.equal(10)
  })
  it('takes the volumeInfo property and sets it at surface level', () => {
    expect(parseBooks(example1)).to.eql(solution1)
  })
  it('can handle missing imageLinks', () => {
    expect(parseBooks(example2)).to.eql(solution2)
  })
})
