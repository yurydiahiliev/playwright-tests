
describe('Data Table Tests', () => {
  beforeEach(async () => {
    console.log('Go to data tables URL.')
    await page.goto(BASE_URL)
  })

  it('Should be fill all form in max 100 items', async () => {
    function randomAge() {
      return Math.floor(Math.random() * 100 + 1).toString()
    }

    function randomPosition() {
      return (Math.random() + 1).toString(36).substring(7)
    }

    await page.selectOption("[name='example_length']", '100')

    const rows = await page.locator('#example tbody tr').all()

    for (const [i, row] of rows.entries()) {
        const person = {
          age: randomAge(),
          position : randomPosition(),
          office : 'London'
        }

        const age = row.locator("[id *= 'age']")
        const position = row.locator("[id *= 'position']")
        const office = row.locator("[id *= 'office']")

        await age.fill(person.age)
        await position.fill(person.position)
        await office.selectOption(person.office)

        expect(await age.inputValue()).toBe(person.age);
        expect(await position.inputValue()).toBe(person.position);
        expect(await office.inputValue()).toBe(person.office);
    }
  })
})