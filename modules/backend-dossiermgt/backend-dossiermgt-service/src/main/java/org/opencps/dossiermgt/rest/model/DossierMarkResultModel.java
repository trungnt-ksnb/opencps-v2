//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.07.02 at 04:10:26 PM ICT 
//


package org.opencps.dossiermgt.rest.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="dossierMarkId" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="fileMark" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="fileCheck" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="fileComment" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "dossierMarkId",
    "fileMark",
    "fileCheck",
    "fileComment"
})
@XmlRootElement(name = "DossierMarkResultModel")
public class DossierMarkResultModel {

    protected Long dossierMarkId;
    protected Integer fileMark;
    protected Integer fileCheck;
    protected String fileComment;

    /**
     * Gets the value of the dossierMarkId property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getDossierMarkId() {
        return dossierMarkId;
    }

    /**
     * Sets the value of the dossierMarkId property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setDossierMarkId(Long value) {
        this.dossierMarkId = value;
    }

    /**
     * Gets the value of the fileMark property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getFileMark() {
        return fileMark;
    }

    /**
     * Sets the value of the fileMark property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setFileMark(Integer value) {
        this.fileMark = value;
    }

    /**
     * Gets the value of the fileCheck property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getFileCheck() {
        return fileCheck;
    }

    /**
     * Sets the value of the fileCheck property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setFileCheck(Integer value) {
        this.fileCheck = value;
    }

    /**
     * Gets the value of the fileComment property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFileComment() {
        return fileComment;
    }

    /**
     * Sets the value of the fileComment property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFileComment(String value) {
        this.fileComment = value;
    }

}
