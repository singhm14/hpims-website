import React from "react"

// Libraries
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables/"
import { getSlug } from "utils/functions/"

// Components
import { Link } from "gatsby"

const StyledTeamMemberCard = styled(Link)`
	width: 100%;
	height: 100%;
	display: flex;
	cursor: pointer;
	box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);

	${breakpoint.medium`
    flex-wrap: wrap;
  `}

	.team-member__profile-picture {
		width: 120px;
		height: 160px !important;
		flex-shrink: 0;
		display: flex;
		background-size: cover;
		background-position: center;

		${breakpoint.medium`
      width: 100%;
      height: 282px!important;
    `}
	}

	.team-member__info {
		min-height: 126px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 24px 16px 8px 16px;
		background-color: ${colors.white};

		${breakpoint.medium`
      padding: 16px;
    `}

		* {
			width: 100%;
		}

		.department {
			margin-bottom: 12px;
			font-size: 14px;
			text-transform: uppercase;
		}

		.name {
			margin-bottom: 4px;
			font-weight: 600;
		}

		.link {
			margin-top: 16px;
			align-self: flex-end;
			text-align: right;

			span {
				${breakpoint.medium`
          display: none;
        `}
			}

			&::after {
				content: "+";
				max-height: 10px;
				display: inline-block;
				margin-left: 4px;
				font-size: 18px;
				line-height: 10px;

				${breakpoint.medium`
          font-size: 22px;
        `}
			}
		}
	}
`

const TeamMemberCard = (props) => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "team/profile-picture-placeholder.png" }) {
				childImageSharp {
					fluid(maxWidth: 256, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)
	return (
		<StyledTeamMemberCard to={"/team/" + getSlug(props.name)}>
			<div
				className="team-member__profile-picture bg--grey900"
				style={{
					backgroundImage: `url(${
						props.profilePicture || data.file.childImageSharp.fluid
					})`,
				}}
			/>
			{/* <BackgroundImage className="team-member__profile-picture bg--grey900" fluid={props.profilePicture ? props.profilePicture : data.file.childImageSharp.fluid} style={{ backgroundSize: 'cover' }} /> */}
			<div className="team-member__info bg--grey100 color--black">
				<div>
					<p className="department paragraph--small color--grey900 font-weight--500">
						{props.departments &&
							props.departments.map((department, index) => {
								if (index !== props.departments.length - 1) {
									return department + " | "
								} else {
									return department
								}
							})}
					</p>

					<h5 className="name paragraph--large color--blue500">
						<p className="name color--blue500 font-weight--600">{props.name}</p>
					</h5>
					<p className="paragraph--small color--black">{props.position}</p>
				</div>

				<p className="link color--blue500 font-weight--600">
					<span>View bio</span>
				</p>
			</div>
		</StyledTeamMemberCard>
	)
}

export default TeamMemberCard
