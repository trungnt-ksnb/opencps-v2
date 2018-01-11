//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2017.10.16 at 02:30:16 PM ICT 
//


package org.opencps.api.deliverable.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for DeliverableModel complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="DeliverableModel">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="deliverableId" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="userId" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="userName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="createDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="modifiedDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="deliverableCode" type="{http://www.w3.org/2001/XMLSchema}String" minOccurs="0"/>
 *         &lt;element name="deliverableName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="deliverableType" type="{http://www.w3.org/2001/XMLSchema}String" minOccurs="0"/>
 *         &lt;element name="govAgencyCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="govAgencyName" type="{http://www.w3.org/2001/XMLSchema}String" minOccurs="0"/>
 *         &lt;element name="applicantIdNo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="applicantName" type="{http://www.w3.org/2001/XMLSchema}String" minOccurs="0"/>
 *         &lt;element name="subject" type="{http://www.w3.org/2001/XMLSchema}String" minOccurs="0"/>
 *         &lt;element name="issueDate" type="{http://www.w3.org/2001/XMLSchema}String" minOccurs="0"/>
 *         &lt;element name="expireDate" type="{http://www.w3.org/2001/XMLSchema}String" minOccurs="0"/>
 *         &lt;element name="revalidate" type="{http://www.w3.org/2001/XMLSchema}String" minOccurs="0"/>
 *         &lt;element name="deliverableState" type="{http://www.w3.org/2001/XMLSchema}String" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "DeliverableModel", propOrder = {
    "deliverableId",
    "userId",
    "userName",
	"createDate",
    "modifiedDate",
    "deliverableCode",
    "deliverableName",
    "deliverableType",
    "govAgencyCode",
    "govAgencyName",
    "applicantIdNo",
    "applicantName",
    "subject",
    "issueDate",
    "expireDate",
    "revalidate",
    "deliverableState",
})
@XmlRootElement(name = "DeliverableModel")
public class DeliverableModel {
	protected Long deliverableId;
	protected Long userId;
	protected String userName;
    protected String createDate;
    protected String modifiedDate;
    protected String deliverableCode;
    protected String deliverableName;
    protected String deliverableType;
    protected String govAgencyCode;
    protected String govAgencyName;
    protected String applicantIdNo;
    protected String applicantName;
    protected String subject;
    protected String issueDate;
    protected String expireDate;
    protected String revalidate;
    protected String deliverableState;

    /**
     * Gets the value of the createDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCreateDate() {
        return createDate;
    }

    /**
     * Sets the value of the createDate property.
     * 
     * @param createDate
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    /**
     * Gets the value of the modifiedDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getModifiedDate() {
        return modifiedDate;
    }

    /**
     * Sets the value of the modifiedDate property.
     * 
     * @param modifiedDate
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    /**
     * Gets the value of the deliverableId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public Long getDeliverableId() {
		return deliverableId;
	}

    /**
     * Sets the value of the deliverableId property.
     * 
     * @param deliverableId
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setDeliverableId(Long deliverableId) {
		this.deliverableId = deliverableId;
	}

    /**
     * Gets the value of the userId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public Long getUserId() {
		return userId;
	}

    /**
     * Sets the value of the userId property.
     * 
     * @param userId
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setUserId(Long userId) {
		this.userId = userId;
	}

    /**
     * Gets the value of the userName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getUserName() {
		return userName;
	}

    /**
     * Sets the value of the userName property.
     * 
     * @param userName
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setUserName(String userName) {
		this.userName = userName;
	}

    /**
     * Gets the value of the deliverableCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getDeliverableCode() {
		return deliverableCode;
	}

    /**
     * Sets the value of the deliverableCode property.
     * 
     * @param deliverableCode
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setDeliverableCode(String deliverableCode) {
		this.deliverableCode = deliverableCode;
	}

    /**
     * Gets the value of the deliverableName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getDeliverableName() {
		return deliverableName;
	}

    /**
     * Sets the value of the deliverableName property.
     * 
     * @param deliverableName
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setDeliverableName(String deliverableName) {
		this.deliverableName = deliverableName;
	}

    /**
     * Gets the value of the deliverableType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getDeliverableType() {
		return deliverableType;
	}

    /**
     * Sets the value of the deliverableType property.
     * 
     * @param deliverableType
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setDeliverableType(String deliverableType) {
		this.deliverableType = deliverableType;
	}

    /**
     * Gets the value of the govAgencyCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getGovAgencyCode() {
		return govAgencyCode;
	}

    /**
     * Sets the value of the govAgencyCode property.
     * 
     * @param govAgencyCode
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setGovAgencyCode(String govAgencyCode) {
		this.govAgencyCode = govAgencyCode;
	}

    /**
     * Gets the value of the govAgencyName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getGovAgencyName() {
		return govAgencyName;
	}

    /**
     * Sets the value of the govAgencyName property.
     * 
     * @param govAgencyName
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setGovAgencyName(String govAgencyName) {
		this.govAgencyName = govAgencyName;
	}

    /**
     * Gets the value of the applicantIdNo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getApplicantIdNo() {
		return applicantIdNo;
	}

    /**
     * Sets the value of the applicantIdNo property.
     * 
     * @param applicantIdNo
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setApplicantIdNo(String applicantIdNo) {
		this.applicantIdNo = applicantIdNo;
	}

    /**
     * Gets the value of the applicantName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getApplicantName() {
		return applicantName;
	}

    /**
     * Sets the value of the applicantName property.
     * 
     * @param applicantName
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}

    /**
     * Gets the value of the subject property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getSubject() {
		return subject;
	}

    /**
     * Sets the value of the subject property.
     * 
     * @param subject
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setSubject(String subject) {
		this.subject = subject;
	}

    /**
     * Gets the value of the issueDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getIssueDate() {
		return issueDate;
	}

    /**
     * Sets the value of the issueDate property.
     * 
     * @param issueDate
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setIssueDate(String issueDate) {
		this.issueDate = issueDate;
	}

    /**
     * Gets the value of the expireDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getExpireDate() {
		return expireDate;
	}

    /**
     * Sets the value of the expireDate property.
     * 
     * @param expireDate
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setExpireDate(String expireDate) {
		this.expireDate = expireDate;
	}

    /**
     * Gets the value of the revalidate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getRevalidate() {
		return revalidate;
	}

    /**
     * Sets the value of the revalidate property.
     * 
     * @param revalidate
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setRevalidate(String revalidate) {
		this.revalidate = revalidate;
	}

    /**
     * Gets the value of the deliverableState property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getDeliverableState() {
		return deliverableState;
	}

    /**
     * Sets the value of the deliverableState property.
     * 
     * @param deliverableState
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setDeliverableState(String deliverableState) {
		this.deliverableState = deliverableState;
	}


}