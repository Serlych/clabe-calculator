export const getClabe = (bankParam, plazaParam, accountParam) => {

    const bank = bankParam.toString()
    const plaza = plazaParam.toString()
    const account = accountParam.toString()

    let arr = bank + plaza + account
    arr = arr.split('')

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }

    let total = []
    let counter = 0

    for (let i = 0; i < newArr.length; i++) {

        if (counter === 0) {
            total.push((newArr[i] * 3) % 10)
            counter++
            continue
        }

        if (counter === 1) {
            total.push((newArr[i] * 7) % 10)
            counter++
            continue
        }

        if (counter === 2) {
            total.push((newArr[i] * 1) % 10)
            counter = 0
            continue
        }
    }
    
    let control = total.reduce((total, value) => total + value)
    control = (10 - (control % 10)) % 10

    return bank + plaza + account + control
}