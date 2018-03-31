import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import { TerminalInput } from '../../../components/text/terminal'
import { ExternalLink } from '../../../components/text/link'
import { lewi } from '../../../lib/data/team'

// prettier-ignore
export default withDoc({
  title: 'Installing IRI',
  date: '12 March 2018',
  authors: [lewi],
  editUrl: 'pages/iri/usage/install-iri.js',
})(markdown(components)`

The official IRI Github repository can be found 
here: ${<ExternalLink href="https://github.com/iotaledger/iri" key="">https://github.com/iotaledger/iri</ExternalLink>} 

In order to install IRI, there are certain requirements to be considered. 
It should be noted that IRI only works on 64-bit architectures.

- Java 8u66 or higher (Oracle)
- On Windows, make sure that Microsoft Visual C++ 2015 Redistributable Update 3 is installed

## Ways to install IRI

### Download 
The easiest and fastest way to get IRI is by getting the already 
compiled version from Github. You can find the compiled version 
on the release page on Github: ${<ExternalLink href="https://github.com/iotaledger/iri/releases" key="">https://github.com/iotaledger/iri/releases</ExternalLink>}  

### Compile yourself
If you choose to compile IRI yourself you are required to install maven.

${<TerminalInput>{`git clone https://github.com/iotaledger/iri
cd iri
mvn clean compile && mvn package`}</TerminalInput>}

This will then create a target folder, in which you will 
find the compiled .jar (not the original one) which you 
can then use.

`)
