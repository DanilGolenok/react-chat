import React, { useMemo } from 'react';
import { useActiveLink } from 'gateway/navigation/hooks/useActiveLink';
import { computeClassnames } from 'ui/@core/lib/compute-classnames';

import { Link } from 'react-router-dom';

import './NavigationLink.scss';

type Props = {
	link: string;
	text: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const NavigationLink: React.FC<Props> = ({ link, text, icon: Icon }) => {
	const { activeLink, setActiveLink } = useActiveLink();

	const isActive = useMemo(() => activeLink === link, [activeLink, link]);
	const className = useMemo(() => {
		return computeClassnames('navigation-link', {
			['navigation-link--active']: isActive,
		});
	}, [isActive]);

	const onChangeActiveLink = () => setActiveLink(link);

	return (
		<div className="link-container" onClick={onChangeActiveLink}>
			<Link to={link}>
				<div className={className}>
					<Icon className="navigation-link__icon" />
					<span className="navigation-link__text">{text}</span>
				</div>
			</Link>
		</div>
	);
};
