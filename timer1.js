let args = process.argv.slice(2);
newA = args.map( x => x * 1000);

newA.forEach((element) => {
  if (element >= 0 ) {
    setTimeout(() => {
      process.stdout.write('.\n')} , element
    )
  }
})
