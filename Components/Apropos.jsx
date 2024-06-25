import styles from './Apropos.module.css'
import Image from 'next/image';
import histoire from '@/public/histoire.webp'
import culture from '@/public/culture.webp'
import moderne from '@/public/moderne.webp'





export default function Apropos(){

    return (
        <div className={styles.Apropos}>
        <>
          <section className={styles.intro}>
            <h1>À propos de Bejaia</h1>
            <p>Bienvenue à Bejaia, une ville riche en histoire et en culture située sur la côte méditerranéenne de l'Algérie. Découvrez ce qui rend cette ville si spéciale.</p>
          </section>
    
          <section className={styles.history}>
            <h2>Histoire</h2>
            <Image
                src={histoire}
                alt="histoire"
                width={600}
                height={400}
                className={styles.image}
        />
           
            <p>Bejaia, également connue sous le nom de Bougie, possède une histoire riche qui remonte à l'époque romaine. La ville a été un important centre commercial et culturel au fil des siècles, influencée par diverses civilisations, dont les Romains, les Byzantins, et les Ottomans.</p>
          </section>
    
          <section className={styles.culture}>
            <h2>Culture</h2>
            <Image
                src={culture}
                alt="culture"
                width={600}
                height={400}
                className={styles.image}
        />
            <p>Bejaia est un creuset de cultures, avec une population diverse qui célèbre une multitude de traditions et de fêtes. La musique, la danse et l'artisanat locaux sont des éléments clés de la vie culturelle à Bejaia. Les visiteurs peuvent assister à des festivals animés et découvrir les artisans locaux.</p>
          </section>
    
          <section className={styles.landmarks}>
            <h2>Lieux Emblématiques</h2>
            <ul>
              <li><strong>Cap Carbon:</strong> Un promontoire spectaculaire offrant des vues imprenables sur la Méditerranée.</li>
              <li><strong>Vieille Ville:</strong> Un quartier historique avec des ruelles étroites et des bâtiments anciens.</li>
              <li><strong>Parc National de Gouraya:</strong> Un parc naturel abritant une faune et une flore diversifiées.</li>
              <li><strong>Fort de Yemma Gouraya:</strong> Une ancienne forteresse perchée sur une montagne offrant une vue panoramique sur la ville.</li>
            </ul>
          </section>
    
          <section className={styles.modernBejaia}>
            <h2>Bejaia Moderne</h2>
            <Image
                src={moderne}
                alt="moderne"
                width={600}
                height={400}
                className={styles.image}
        />
            <p>Aujourd'hui, Bejaia est une ville dynamique et moderne qui continue de croître tout en préservant son riche patrimoine. Elle est un important centre économique de la région, avec un port actif et une industrie touristique en plein essor.</p>
          </section>
        </>
        </div>
      );
}