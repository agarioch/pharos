import { useMemo } from 'react';
import { useState } from 'react';
import { Application } from '../../types';
import styles from './NavigationNode.module.css';

type NavigationNodeProps = {
  name: string;
  level: number;
  nodes: Application[];
  selectedBCAP: string | null;
  setSelectedBCAP: React.Dispatch<React.SetStateAction<string | null>>;
};

const NavigationNode = ({
  name,
  level,
  nodes,
  selectedBCAP,
  setSelectedBCAP,
}: NavigationNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get any children e.g. where BCAP3 belongs to current node BCAP2
  const childLevel = getLevelName(level + 1);
  const childNodes: string[] = useMemo(
    () =>
      [
        ...new Set(nodes.map((app) => app[childLevel]).filter((bcap) => bcap)),
      ].sort(),
    [nodes, childLevel]
  );
  // render list item + button & children if children exist
  return (
    <li className={styles.navListItem}>
      {childNodes.length > 0 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${styles.navButton} ${
            isExpanded && styles.navButtonExpanded
          }`}
        >
          <span>▸</span>
        </button>
      )}
      <button
        type="button"
        className={`${styles.navButton} ${
          selectedBCAP &&
          name.startsWith(selectedBCAP) &&
          styles.navButtonSelected
        }`}
        onClick={() => {
          setSelectedBCAP((prior) => (prior === name ? null : name));
        }}
      >
        {name}
      </button>
      {isExpanded && childNodes.length > 0 && (
        <ul>
          {childNodes.map((bcap) => {
            return (
              <NavigationNode
                key={bcap}
                name={bcap}
                level={level + 1}
                nodes={nodes.filter(
                  (child) =>
                    child[childLevel] && child[childLevel].startsWith(bcap)
                )}
                selectedBCAP={selectedBCAP}
                setSelectedBCAP={setSelectedBCAP}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};

function getLevelName(level: number): 'BCAP1' | 'BCAP2' | 'BCAP3' {
  return `BCAP${level}` as 'BCAP1' | 'BCAP2' | 'BCAP3';
}

export default NavigationNode;
