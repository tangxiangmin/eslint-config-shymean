const a = 1

a = 10

const str = "123"


for (let i = 0; i < 10; ++i) {
  console.log('hello')
}


async function loop(){
  let count = 0
  while(count < 10){
    await sleep(100)
    count++
  }
}

loop()
